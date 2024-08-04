import Guidance from "./Guidance";
import { useTranslation } from "react-i18next";

export const TV = () => {
  const { t } = useTranslation();

  const image = `https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png`;
  const video = `https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v`;
  const title = t("Enjoy TV");
  const description = t("Watch on Platforms");
  return (
    <Guidance title={title} description={description} reverse={false}>
      <div className="relative flex">
        {/* TV frame */}
        <img className="z-10 object-cover" src={image} alt="TV frame" />
        {/* Video inside TV frame */}
        <video
          style={{ top: "20%", left: "12%" }}
          className="absolute inset-0 object-cover"
          loop
          muted
          autoPlay
          src={video}
        />
      </div>
    </Guidance>
  );
};
