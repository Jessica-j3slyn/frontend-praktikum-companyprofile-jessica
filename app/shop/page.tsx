import ProductCard from "../../components/ProductCard";
import { products } from "../../data/products";

export default function ShopPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16">
      <h1 className="text-center text-3xl font-bold">Shop</h1>
      <p className="mt-2 text-center text-zinc-600">
        Klik salah satu item untuk melihat detailnya.
      </p>
      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </div>
    </div>
  );
}