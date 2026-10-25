import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { formatPrice, products } from "../../../data/products";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) notFound();

  const info = [
    `Size ${product.size}`,
    product.condition,
    `Era ${product.era}`,
  ];

  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <div className="card-hard grid md:grid-cols-2">
        <div className="relative h-80 border-b-2 border-black bg-zinc-100 md:h-full md:min-h-[420px] md:border-b-0 md:border-r-2">
  <Image
    src={product.image}
    alt={product.name}
    fill
    sizes="(min-width: 768px) 450px, 100vw"
    className="object-cover"
  />
</div>

        <div className="p-6 sm:p-8">
          <p className="text-xs font-bold uppercase tracking-widest text-zinc-500">
            {product.category}
          </p>
          <h1 className="mt-2 text-2xl font-bold">{product.name}</h1>
          <p className="mt-3 text-2xl font-bold">{formatPrice(product.price)}</p>

          <div className="mt-4 flex flex-wrap gap-2">
            {info.map((i) => (
              <span
                key={i}
                className="rounded-full border-2 border-black px-3 py-1 text-xs font-bold"
              >
                {i}
              </span>
            ))}
          </div>

          <p className="mt-5 text-zinc-700"></p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/contact" className="chrome-btn px-6 py-2">
              Tanya Item Ini
            </Link>
            <Link
              href="/shop"
              className="rounded-full border-2 border-black bg-white px-6 py-2 font-bold transition hover:bg-black hover:text-white"
            >
              ← Kembali
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}