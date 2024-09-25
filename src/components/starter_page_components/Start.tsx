import { Form } from "./Form";
import { useTranslation } from "react-i18next";

export const Start = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-5 text-center text-white h-96 items-center justify-center">
      <p className="text-4xl lg:text-5xl font-bold">{t("Unlimited movies")}</p>
      <p className="text-xl lg:text-2xl">{t("Watch anywhere")}</p>
      <Form />
    </div>
  );
};
