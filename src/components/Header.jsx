import logo from "../../images/iteration-1-images/logo.svg";

export default function Header() {
  return (
    <header className="bg-[#CE2829]">
      <div className="mx-auto flex h-[120px] max-w-[1440px] items-center justify-center px-4">
        <img
          src={logo}
          alt="Teknolojik Yemekler"
          className="w-[220px] md:w-[280px]"
        />
      </div>
    </header>
  );
}