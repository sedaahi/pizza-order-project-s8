import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#CE2829] px-4">
      <div className="text-center text-white">
        <h1 className="mb-8 text-4xl font-bold">Teknolojik Yemekler</h1>

        <Link
          to="/order"
          className="inline-block rounded-full bg-[#FDC913] px-8 py-3 font-semibold text-[#292929]"
        >
          ACIKTIM
        </Link>
      </div>
    </main>
  );
}