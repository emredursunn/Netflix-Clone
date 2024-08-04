import React from "react";
import Guidance from "./Guidance";
import { useTranslation } from "react-i18next";

const Kids = () => {
  const { t } = useTranslation();

  const image =
    "https://occ-0-3891-3467.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABejKYujIIDQciqmGJJ8BtXkYKKTi5jiqexltvN1YmvXYIfX8B9CYwooUSIzOKneblRFthZAFsYLMgKMyNfeHwk16DmEkpIIcb6A3.png?r=f55";
  const title = t("Create profiles for kids");
  const description =
    t("Kids on adventure") 
  return (
    <Guidance title={title} description={description} reverse={true}>
      <img src={image} className="object-cover" />
    </Guidance>
  );
};

export default Kids;
