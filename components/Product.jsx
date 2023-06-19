import ProductImage from "./ProductImage";
import Link from "next/link";
const Product = ({ product }) => {
  return (
    <Link
      prefetch={false}
      href={`/products/${product.id}`}
      className="h-96 flex  flex-col  mx-2 my-4 md:my-2 rounded border group  p-8 hover:scale-105 transition-transform ease-out duration-200 "
    >
      <div className="relative max-h-72 flex-1">
        <ProductImage product={product} fill />
      </div>
      <div className="font-semibold flex items-center justify-between mt-4 mb-1">
        <p className="w-44 truncate">{product.title.substring(0, 12)}</p>
        <p className="bg-red-500 p-1 rounded text-white"> $ {product.price}</p>
      </div>
      <p className="italic text-xs w-64 line-clamp-2 text-gray-600">
        {product.description}
      </p>
    </Link>
  );
};

export default Product;
