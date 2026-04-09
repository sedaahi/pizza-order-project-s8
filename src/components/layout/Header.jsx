import logo from "../../../images/iteration-1-images/logo.svg";

export default function Header() {
  return (
    <header className="bg-[#CE2829]">
      <div className="mx-auto flex h-[84px] max-w-[1440px] items-center justify-center px-4 md:h-[120px]">
        <img
          src={logo}
          alt="Teknolojik Yemekler"
          className="w-[180px] md:w-[280px]"
        />
      </div>
    </header>
  );
}