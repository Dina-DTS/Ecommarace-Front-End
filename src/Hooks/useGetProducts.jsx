import { useQuery } from "@tanstack/react-query"
import axios from "axios"


export function useGetProducts(){
    const getProducts=()=>axios.get("https://ecommerce.routemisr.com/api/v1/products")

    const {data:products,isLoading}= useQuery({
         queryKey:["getProducts"],
         queryFn:getProducts,
         staleTime:5000,
         select:data=>data.data.data
     })
     return {products,isLoading}
}

export default function useGetBrands() {
    const getBrands = () => axios.get("https://ecommerce.routemisr.com/api/v1/brands");

    const { data: brands, isLoading } = useQuery({
        queryKey: ["getBrands"],
        queryFn: getBrands,
        staleTime: 5000,
        select: data => data.data.data
    });

    return { brands, isLoading };
}

export  function useGetCategories() {
    const getCategories = () => axios.get("https://ecommerce.routemisr.com/api/v1/categories");

    const { data: categories, isLoading } = useQuery({
        queryKey: ["getCategories"],
        queryFn: getCategories,
        staleTime: 5000,
        select: data => data.data.data
    });

    return { categories, isLoading };
}
export  function useGetSubCategories(id) {
    const getSubCategories = () => axios.get(`https://ecommerce.routemisr.com/api/v1/categories/${id}/subcategories`);

    const { data: subcategories, isLoading } = useQuery({
        queryKey: ["getSubCategories", id],
        queryFn: getSubCategories,
        staleTime: 5000,
        enabled: !!id, 
        select: data => data.data.data
    });

    return { subcategories, isLoading };
}