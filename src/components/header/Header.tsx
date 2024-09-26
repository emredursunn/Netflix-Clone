// import { useTranslation } from "react-i18next";
import { LanguageSelector } from "../starter_page_components/LanguageSelector";
import logo from "../../images/Logo.png"
import { Link } from "react-router-dom";

const Header = () => {
  // const { t } = useTranslation();

  return (
    <div className="flex w-screen h-20 px-5 xl:px-10 bg-transparent justify-around items-center">
      <img className="w-24 md:w-48 md:h-16 h-12" src={logo} alt="logo"/>

      <nav className="flex gap-4">
        <div className="hidden sm:flex">
        <LanguageSelector />
        </div>
        {/* <Link to="/login">
          <button className="py-2 px-4 rounded-lg font-bold bg-red-700 text-white text-sm xl:text-l">
            {t("Sign In")}
          </button>
        </Link> */}
        <Link to="/home">
          <button className="py-2 px-4 rounded-lg font-bold bg-red-700 text-white text-sm xl:text-l">
            {("Home")}
          </button>
        </Link>
      </nav>
    </div>
  );
};
export default Header;
