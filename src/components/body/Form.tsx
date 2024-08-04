import { useState } from "react";
import { useTranslation } from "react-i18next";

export const Form = () => {
  const [email, setEmail] = useState("");
  const { t } = useTranslation();

  const handleEmailInputChange = (e: any) => {
    setEmail(e.target.value);
  };

  const handleSubmit = () => {};

  return (
    <div className="flex flex-col justify-center items-center">
      <p className="text-wrap text-center text-xl lg:text-2xl m-5">{t("Ready to watch")}</p>
      <form
        className="flex flex-col lg:flex-row  gap-2 pb-10 justify-center items-center"
        onSubmit={handleSubmit}
      >
        <input
          className="bg-primary_1 text-white pr-24 bg-opacity-60 border-2 rounded-md border-gray p-3"
          placeholder={t("Email address")}
          type="email"
          value={email}
          onChange={handleEmailInputChange}
        />
        <button
          className="bg-primary_2 hover:bg-opacity-80 lg:w-auto px-6 py-3 text-lg lg:text-xl bg-opacity-90 rounded-md font-bold"
          type="submit"
        >
          {t("Get started")} {">"}
        </button>
      </form>
    </div>
  );
};
