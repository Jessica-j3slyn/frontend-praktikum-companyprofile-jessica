import Image from "next/image";
import Link from "next/link";
import { formatPrice, type Product } from "../data/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/shop/${product.slug}`} className="card-hard block">
      <div className="relative h-56 border-b-2 border-black bg-zinc-100">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(min-width: 1024px) 320px, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <p className="text-xs font-bold uppercase tracking-widest text-zinc-500">
          {product.category}
        </p>
        <h3 className="mt-1 font-bold">{product.name}</h3>
        <div className="mt-3 flex items-center justify-between text-sm">
          <span className="font-bold">{formatPrice(product.price)}</span>
          <span className="rounded-full border-2 border-black px-2 py-0.5 text-xs font-bold">
            {product.size}
          </span>
        </div>
      </div>
    </Link>
  );
}