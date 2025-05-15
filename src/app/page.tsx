import { Suspense } from 'react';
import { getProducts } from '@/config/api';
import ProductCard from '@/components/ProductCard';
import { ProductSkeletonGrid } from '@/components/ProductSkeleton';

// Products container that fetches data
async function ProductsContainer() {
  // Fetch products directly in the component with App Router
  const productsData = await getProducts();
  const { products, total } = productsData;
  
  return (
    <>
      <h1 className="text-3xl font-bold mb-6">Products ({total})</h1>
      
      {products.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </>
  );
}

// Loading fallback component
function ProductsLoading() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-6">Products</h1>
      <ProductSkeletonGrid count={9} />
    </>
  );
}

// Main page component with Suspense
export default function ProductsPage() {
  return (
    <main className="container mx-auto py-8 px-4">
      <Suspense fallback={<ProductsLoading />}>
        <ProductsContainer />
      </Suspense>
    </main>
  );
}