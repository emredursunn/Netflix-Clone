import Guidance from "./Guidance";
import { useTranslation } from "react-i18next";

export const Monitor = () => {
  const { t } = useTranslation();

  const video =
    "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v";
  const image =
    "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png";
  const title = t("Watch everywhere");
  const description = t("Stream unlimited");
  return (
    <Guidance title={title} description={description} reverse={false}>
      <figure className="relative flex">
        <img className="z-10 object-cover" src={image} />
        <video
          muted
          loop
          autoPlay
          style={{ top: "10%", left: "19%", maxWidth: "62%" }}
          className="absolute inset-0 object-cover"
          src={video}
        ></video>
      </figure>
    </Guidance>
  );
};
