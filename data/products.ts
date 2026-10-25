export type Product = {
  slug: string;
  name: string;
  category: string;
  image: string;
  price: number;
  size: string;
  condition: string;
  era: string;
  description: string;
};

export const formatPrice = (price: number) =>
  "Rp " + price.toLocaleString("id-ID");

export const products: Product[] = [
  {
    slug: "baby-tee-butterfly",
    name: "Butterfly Raglan Baby Tee",
    category: "Tops",
    image: "/products/baby-tee-butterfly.png",
    price: 65000,
    size: "S",
    condition: "Like New",
    era: "2002",
    description:
      "Baby tee putih dengan lengan raglan hitam dan print kupu-kupu di bagian depan. Bahan stretch yang nyaman, cocok dipadukan dengan low-rise jeans.",
  },
  {
    slug: "butterfly-flare-jeans",
    name: "Butterfly Flare Jeans",
    category: "Bottoms",
    image: "/products/butterfly-flare-jeans.png",
    price: 135000,
    size: "M",
    condition: "Good",
    era: "2001",
    description:
      "Jeans hitam washed dengan potongan flare dan patch kupu-kupu berumbai di bagian paha dan kaki. Khas gaya awal 2000-an.",
  },
  {
    slug: "puffy-silver-jacket",
    name: "Silver Hooded Jacket",
    category: "Outerwear",
    image: "/products/puffy-silver-jacket.png",
    price: 210000,
    size: "L",
    condition: "Good",
    era: "2000",
    description:
      "Jaket hoodie metalik warna silver dengan tali serut di bagian bawah dan lengan. Langsung bikin outfit terasa futuristik ala milenium baru.",
  },
  {
    slug: "platform-boots",
    name: "Chunky Chain Boots",
    category: "Shoes",
    image: "/products/platform-boots.png",
    price: 180000,
    size: "39",
    condition: "Very Good",
    era: "2003",
    description:
      "Boots hitam dengan sol platform tebal, tali sepatu, gesper, dan aksen rantai silver. Nyaman dipakai jalan dan jadi pusat perhatian.",
  },
  {
    slug: "chain-shoulder-bag",
    name: "Grommet Shoulder Bag",
    category: "Accessories",
    image: "/products/chain-shoulder-bag.png",
    price: 85000,
    size: "One Size",
    condition: "Like New",
    era: "2002",
    description:
      "Tas bahu canvas hitam dengan strap bergrommet, banyak saku, dan gantungan rantai. Muat untuk ponsel, dompet, dan barang harian.",
  },
  {
    slug: "chrome-shades",
    name: "Chrome Rimless Shades",
    category: "Accessories",
    image: "/products/chrome-shades.png",
    price: 55000,
    size: "One Size",
    condition: "Good",
    era: "2001",
    description:
      "Kacamata tanpa bingkai dengan lensa abu-abu dan gagang silver futuristik. Aksesori kecil yang langsung memberi vibes Y2K.",
  },
];