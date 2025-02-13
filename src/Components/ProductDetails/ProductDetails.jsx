import React from 'react';
import Style from "./ProductDetails.module.css";
import { FaStar } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ProductCard from '../ProductCard/ProductCard';
import { useQuery } from '@tanstack/react-query';
import LoadingComponent from '../loadingComponent/loadingComponent';

export default function ProductDetails() {
  const { id, cId } = useParams();

  const getProductDetails = async () => {
    const response = await axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`);
    return response.data;
  };

  const getCategoryProducts = async () => {
    const response = await axios.get(`https://ecommerce.routemisr.com/api/v1/products`);
    return response.data.data.filter(product => product.category._id === cId).slice(0, 5);
  };

  const { data: productData, isLoading: isProductLoading } = useQuery({
    queryKey: ["getProductDetails", id],
    queryFn: getProductDetails,
  });

  const { data: relatedProducts, isLoading: isCategoryLoading } = useQuery({
    queryKey: ["getCategoryProducts", cId],
    queryFn: getCategoryProducts,
    enabled: !!cId,
  });

  if (isProductLoading) 
    return (
      <LoadingComponent/>
    );

  return (
    <>
      <div className="grid grid-cols-12 gap-4 mt-7">
        <div className="col-span-12 md:col-span-4">
          <img
            src={productData?.data?.imageCover}
            alt="Product"
            className="w-full max-w-60 mx-auto md:max-w-full"
          />
        </div>
        <div className="col-span-12 md:col-span-8 self-center">
          <h2 className="mb-2">{productData?.data?.title}</h2>
          <p className="mb-3 text-black/60">{productData?.data?.description}</p>
          <span className="text-green-500">{productData?.data?.category?.name}</span>

          <div className="flex justify-between mb-3">
            <span>{productData?.data?.price}  EGY</span>
            <span className="flex gap-3 items-center">
              {productData?.data?.ratingsAverage} <FaStar className="text-yellow-400" />
            </span>
          </div>
        </div>
      </div>

      {!isCategoryLoading && relatedProducts?.length > 0 &&(
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 mt-6">
          {relatedProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </>
  );
}
