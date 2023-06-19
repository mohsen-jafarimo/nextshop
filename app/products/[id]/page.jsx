import ProductImage from "@/components/ProductImage";
import { notFound } from "next/navigation";

const ProductPage = async ({ params: { id } }) => {
  try {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    const item = await res.json();
    return (
      <div className="max-w-5xl mt-40 mx-20 flex flex-col md:flex-row items-center gap-8 px-4 pb-10">
        <ProductImage product={item} />
        <div>
          <div className="flex justify-between  my-2 items-center">
            <h1 className="text-2xl font-semibold">
              {item.title.substring(0, 12)}
            </h1>
            <h2 className="text-2xl text-white rounded font-bold bg-red-500 p-2">
              {" "}
              $ {item.price}
            </h2>
          </div>
          <p className="italic line-clamp-4 mb-5">{item.description}</p>
          <div className="flex flex-col space-y-3">
            <button className="border-2 p-2 transition-all duration-500 bg-transparent hover:bg-gray-800 hover:text-white font-bold ">
              Buy Now
            </button>
            <button className="bg-gray-800 font-bold p-1 transition-all duration-700 text-white hover:border-2 hover:bg-transparent hover:text-gray-800">
              Bookmark
            </button>
          </div>
        </div>
      </div>
    );
  } catch (err) {
    notFound();
  }
};

export default ProductPage;
