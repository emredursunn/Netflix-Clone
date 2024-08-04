import Guidance from "./Guidance";
import { useTranslation } from "react-i18next";

export const Phone = () => {
  const { t } = useTranslation();

  const image = `https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg`;
  const cover = `https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png`;
  const movieName = "Stranger Things";
  const gif = `https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif`;
  const title = t("Download shows");
  const description = t("Save favorites");

  return (
    <Guidance title={title} description={description} reverse={true}>
      <div className="relative flex">
        {/* TV frame */}
        <img className="object-cover" src={image} alt="Phone frame" />
        {/* Video inside TV frame */}
        <div
          style={{ left: "20%" }}
          className="absolute flex bottom-7 w-3/5 bg-primary_1 py-3 rounded-2xl border-2 items-center"
        >
          <img className="w-1/3 h-16 object-contain" src={cover} />
          <div className="w-1/2">
            <p className="font-bold text-lg">{movieName}</p>
            <p className="text-blue text-sm">{t("Downloading")}...</p>
          </div>
          <div
            className={`w-1/6 z-10 h-12 bg-contain bg-no-repeat ${`bg-[url(${gif})]`}`}
          />
        </div>
      </div>
    </Guidance>
  );
};
