import CartProductDetails from "../CartProductDetails/CartProductDetails";

export default function CartItemsTable({ products, handleremoveProductFromCart, handleupdateProductQun }) {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg ">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-16 py-3"><span className="sr-only">Image</span></th>
            <th scope="col" className="px-6 py-3">Product</th>
            <th scope="col" className="px-6 py-3">Qty</th>
            <th scope="col" className="px-6 py-3">Price</th>
            <th scope="col" className="px-6 py-3">Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <CartProductDetails
              key={p._id}
              p={p}
              handleremoveProductFromCart={handleremoveProductFromCart}
              handleupdateProductQun={handleupdateProductQun}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
