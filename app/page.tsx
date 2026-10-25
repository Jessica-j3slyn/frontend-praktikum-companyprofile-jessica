import Link from "next/link";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

export default function Home() {
  const featured = products.slice(0, 3);

  return (
    <div>
      <section className="mx-auto max-w-5xl px-4 py-20 text-center">
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-zinc-500">
          Pre-loved · Y2K · Thrift
        </p>
        <h1 className="font-display chrome-text mt-4 text-5xl font-black leading-tight sm:text-7xl">
          CHROME
          <br />
          CLOSET
        </h1>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href="/shop" className="chrome-btn px-8 py-3">
            Shop Now
          </Link>
          <Link
            href="/about"
            className="rounded-full border-2 border-black bg-white px-8 py-3 font-bold transition hover:bg-black hover:text-white"
          >
            About Us
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-20">
        <h2 className="mb-8 text-center text-2xl font-bold">New Arrivals</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
}