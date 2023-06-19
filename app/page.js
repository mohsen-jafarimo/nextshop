import Products from "@/components/Products";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-white">
      <h3 className="text-4xl mt-36 p-4 rounded font-bold">Deals On The Day</h3>
      <Products />
    </main>
  );
}
