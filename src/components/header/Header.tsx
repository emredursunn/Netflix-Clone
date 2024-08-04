import React from "react";
import { useTranslation } from "react-i18next";
import { LanguageSelector } from "../body/LanguageSelector";

const Header = () => {
  const { t } = useTranslation();

  return (
    <div className="flex absolute inset-0 w-screen h-20 px-5 xl:px-10 bg-transparent justify-around items-center">
      <a className="text-3xl xl:text-5xl text-transparent bg-clip-text bg-primary_2 font-bold">
        FILMOSOPH
      </a>
      <div className="flex gap-4">
        <LanguageSelector />
        <button className="py-2 px-4 rounded-lg font-bold bg-primary_2 text-white text-sm xl:text-l">
          {t("Sign In")}
        </button>
      </div>
    </div>
  );
};
export default Header;
