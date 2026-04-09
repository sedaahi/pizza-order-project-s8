import insta1 from "../../../images/iteration-2-images/footer/insta/li-0.png";
import insta2 from "../../../images/iteration-2-images/footer/insta/li-1.png";
import insta3 from "../../../images/iteration-2-images/footer/insta/li-2.png";
import insta4 from "../../../images/iteration-2-images/footer/insta/li-3.png";
import insta5 from "../../../images/iteration-2-images/footer/insta/li-4.png";
import insta6 from "../../../images/iteration-2-images/footer/insta/li-5.png";

import locationIcon from "../../../images/iteration-2-images/footer/icons/icon-1.png";
import mailIcon from "../../../images/iteration-2-images/footer/icons/icon-2.png";
import phoneIcon from "../../../images/iteration-2-images/footer/icons/icon-3.png";
import footerLogo from "../../../images/iteration-2-images/footer/logo-footer.svg";

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white">
      <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-40">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <img src={footerLogo} alt="Logo" className="footer-logo" />

            <div className="mt-10 space-y-5 text-[18px] text-[#FAF7F2]">
              <div className="flex items-start gap-3">
                <img src={locationIcon} alt="Konum" className="mt-1 w-[20px]" />
                <p>
                  341 Londonderry Road,
                  <br />
                  İstanbul Türkiye
                </p>
              </div>

              <div className="flex items-center gap-3">
                <img src={mailIcon} alt="E-posta" className="w-[20px]" />
                <p>aciktim@teknolojikyemekler.com</p>
              </div>

              <div className="flex items-center gap-3">
                <img src={phoneIcon} alt="Telefon" className="w-[20px]" />
                <p>+90 216 123 45 67</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="mb-6 text-[24px] font-medium">Hot Menu</h3>

            <ul className="space-y-4 text-[18px] text-[#FAF7F2]">
              <li>Terminal Pizza</li>
              <li>5 Kişilik Hackathlon Pizza</li>
              <li>useEffect Tavuklu Pizza</li>
              <li>Beyaz Console Frosty</li>
              <li>Testler Geçti Mutlu Burger</li>
              <li>Position Absolute Acı Burger</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-[24px] font-medium">Instagram</h3>

            <div className="grid grid-cols-3 gap-3">
              <img src={insta1} alt="Instagram 1" className="h-[86px] w-[86px] object-cover" />
              <img src={insta2} alt="Instagram 2" className="h-[86px] w-[86px] object-cover" />
              <img src={insta3} alt="Instagram 3" className="h-[86px] w-[86px] object-cover" />
              <img src={insta4} alt="Instagram 4" className="h-[86px] w-[86px] object-cover" />
              <img src={insta5} alt="Instagram 5" className="h-[86px] w-[86px] object-cover" />
              <img src={insta6} alt="Instagram 6" className="h-[86px] w-[86px] object-cover" />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full border-t border-white/10 ">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-9 md:px-20 md:px-40 ">
          <p className="text-[15px] text-[#FAF7F2]">© 2023 Teknolojik Yemekler.</p>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 cursor-pointer fill-white opacity-80 hover:opacity-100"
            viewBox="0 0 24 24"
          >
            <path d="M24 4.557a9.93 9.93 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.864 9.864 0 01-3.127 1.195 4.916 4.916 0 00-8.38 4.482A13.94 13.94 0 011.671 3.149 4.916 4.916 0 003.195 9.72a4.9 4.9 0 01-2.229-.616c-.054 2.28 1.581 4.415 3.95 4.89a4.936 4.936 0 01-2.224.085 4.919 4.919 0 004.59 3.417A9.867 9.867 0 010 21.543 13.94 13.94 0 007.548 24c9.142 0 14.307-7.721 13.995-14.646A9.936 9.936 0 0024 4.557z" />
          </svg>
        </div>
      </div>
    </footer>
  );
}