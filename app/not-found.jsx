import Link from "next/link";

const NotFound = () => {
  return (
    <div className="mt-52 mx-24 h-40 flex flex-col justify-evenly items-center bg-red-500 rounded">
      <h2 className="text-4xl font-bold text-white ">
        This Product doesnt found
      </h2>
      <Link
        className="bg-white p-3 font-bold rounded  hover:bg-white hover:border-2 hover:border-blue-500 hover:text-blue-500 transition-all duration-150"
        href={`/`}
      >
        Back To Shop
      </Link>
    </div>
  );
};

export default NotFound;
