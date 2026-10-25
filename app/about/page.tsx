const values = [
  { title: "Sustainable", text: "giving you good quality of clothes" },
  { title: "Nostalgic", text: "2000's vibe" },
  { title: "Affordable", text: "in this economy friendly" },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <h1 className="text-center text-3xl font-bold">About Us</h1>

      <div className="card-hard mt-10 p-6 sm:p-8">
        <div className="space-y-4 text-zinc-800">
          <p>
            Chrome Closet berdiri pada tahun 2025 dari passion kami pada tren
            fashion awal 2000-an. Kami berburu pakaian dan aksesori bekas
            , membersihkannya, lalu menjualnya kembali dengan harga
            affordable.
          </p>
          <p>
            Misi kami membuat gaya Y2K bisa dinikmati siapa saja
            sambil mengurangi limbah fashion. Setiap barang yang kamu beli
            berarti satu pakaian terselamatkan dari tempat sampah.
          </p>
          <p>
            Semua item melewati proses seleksi , so dont worry 
          </p>
        </div>
      </div>

      <div className="mt-10 grid gap-8 sm:grid-cols-3">
        {values.map((v) => (
          <div key={v.title} className="card-hard p-6 text-center">
            <h3 className="font-bold">{v.title}</h3>
            <p className="mt-2 text-sm text-zinc-600">{v.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}