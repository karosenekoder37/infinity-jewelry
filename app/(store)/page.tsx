import ProductsView from "@/components/ProductsView";
import { getAllProducts } from "@/sanity/lib/products/getAllProducts";
import { getAllCategories } from "@/sanity/lib/products/getAllCategories";
import SemiAnnualSaleBanner from "@/components/SemiAnnualSaleBanner";

export const dynamic = "force-static";
export const revalidate = 3600;

export default async function Home() {
  const products = await getAllProducts();
  console.log("THESE ARE THE PRODUCTS WE GOT:", products);
  const categories = await getAllCategories();

  return (
    <div>
      <SemiAnnualSaleBanner />

      <div className="flex flex-col items-center justify-top min-h-screen bg-white p-4">
        <ProductsView products={products} categories={categories} />
      </div>
    </div>
  );
}
