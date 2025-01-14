import ProductGrid from "@/components/ProductGrid";
import { searchProductsByName } from "@/sanity/lib/products/getProductsByName";

async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{
    query: string;
  }>;
}) {
  const { query } = await searchParams;
  const products = await searchProductsByName(query);

  if (!products.length) {
    return (
      <div className="flex flex-col items-center justify-top min-h-screen bg-white p-4">
        <div className="bg-yellow-50 p-8 rounded-lg shadow-md w-full max-w-4xl">
          <h1 className="text-3xl font-bold mb-6 text-center">
            No products for: {query}
          </h1>
          <p className="text-gray-600 text-center">
            Try searching with different keywords
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-top min-h-screen bg-white p-4">
      <div className="bg-yellow-50 p-8 rounded-lg shadow-md w-full max-w-4xl">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Search results for {query}
        </h1>
        <ProductGrid products={products} />
      </div>
    </div>
  );
}

export default SearchPage;
