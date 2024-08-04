import React from "react";
import { AccordionContextProvider } from "../../../context/Context";
import Box from "../Box";
import { Accordion } from "./Accordion";
import { questionData } from "../../../utils/data";
import { Form } from "../Form";
import { useTranslation } from "react-i18next";

export const AskSection = () => {
  const { t } = useTranslation();

  return (
    <AccordionContextProvider>
      <Box>
        <p className="pt-20 pb-8 font-bold text-3xl text-center">
          {t("Asked questions")}
        </p>
        <Accordion data={questionData} />
        <Form />
      </Box>
    </AccordionContextProvider>
  );
};
