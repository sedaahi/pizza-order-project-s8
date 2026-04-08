export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-10 px-6 py-12 md:flex-row md:justify-between md:px-20">
        <div className="max-w-[300px]">
          <h2 className="text-2xl font-bold leading-tight">
            Teknolojik
            <br />
            Yemekler
          </h2>

          <div className="mt-6 space-y-3 text-sm">
            <p>341 Londonderry Road, İstanbul Türkiye</p>
            <p>aciktim@teknolojikyemekler.com</p>
            <p>+90 216 123 45 67</p>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-base font-semibold">Hot Menu</h3>
          <ul className="space-y-2 text-sm">
            <li>Terminal Pizza</li>
            <li>5 Kişilik Hackathlon Pizza</li>
            <li>useEffect Tavuklu Pizza</li>
            <li>Beyaz Console Frosty</li>
            <li>Testler Geçti Mutlu Burger</li>
            <li>Position Absolute Acı Burger</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-base font-semibold">Instagram</h3>
          <div className="grid grid-cols-3 gap-2">
            <div className="h-16 w-16 bg-[#2A2A2A]"></div>
            <div className="h-16 w-16 bg-[#2A2A2A]"></div>
            <div className="h-16 w-16 bg-[#2A2A2A]"></div>
            <div className="h-16 w-16 bg-[#2A2A2A]"></div>
            <div className="h-16 w-16 bg-[#2A2A2A]"></div>
            <div className="h-16 w-16 bg-[#2A2A2A]"></div>
          </div>
        </div>
      </div>
    </footer>
  );
}