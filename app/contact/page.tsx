"use client";

import { useState } from "react";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    e.currentTarget.reset();
  };

  const inputClass =
    "w-full rounded-lg border-2 border-black bg-white px-4 py-3 outline-none placeholder:text-zinc-400 focus:shadow-[3px_3px_0_#111]";

  return (
    <div className="mx-auto max-w-lg px-4 py-16">
      <h1 className="text-center text-3xl font-bold">Say Hi</h1>
      <p className="mt-2 text-center text-zinc-600">
        Ada pertanyaan soal item atau ukuran? give your questions here
      </p>

      <form onSubmit={handleSubmit} className="card-hard mt-10 space-y-4 p-6">
        <input type="text" placeholder="Your Name" required className={inputClass} />
        <input type="email" placeholder="Email Address" required className={inputClass} />
        <textarea placeholder="Your Message" rows={5} required className={inputClass} />
        <button type="submit" className="chrome-btn w-full py-3">
          Send Message
        </button>
      </form>

      {sent && (
        <p className="mt-4 text-center font-bold">
          Terima kasih! Pesanmu sudah terkirim (simulasi).
        </p>
      )}
    </div>
  );
}