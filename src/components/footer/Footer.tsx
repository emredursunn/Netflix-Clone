import { useState, useEffect } from "react";
import Box from "../starter_page_components/Box";
import { footerData } from "../../utils/data";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const {t} = useTranslation()
  const [columns, setColumns] = useState(2);

  const updateColumnCount = () => {
    if (window.innerWidth >= 1024) {
      setColumns(4);
    } else {
      setColumns(2);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", updateColumnCount);
    updateColumnCount(); //initialize

    return () => {
      window.removeEventListener("resize", updateColumnCount);
    };
  }, []);

  return (
    <Box>
      <div className="flex flex-col items-start bg-primary_1 text-gray font-bold w-full lg:w-1/2 lg:mx-96 p-16">
        <p className="text-center text-lg underline lg:text-left cursor-pointer">
          {t("Questions? Contact Us")}
        </p>
        <ul
          style={{
            columnCount: columns,
          }}
          className={`mt-6 col- w-full gap:40 lg:gap-20 text-sm `}
        >
          {footerData.map((value, index) => (
            <li key={index} className="underline mb-4 cursor-pointer">
              {t(value)}
            </li>
          ))}
        </ul>
      </div>
    </Box>
  );
};
