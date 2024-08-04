import React from "react";
import { useTranslation } from "react-i18next";
import Select, { SingleValue } from "react-select";

export const LanguageSelector: React.FC = () => {
  const { i18n } = useTranslation();

  const options = [
    { value: "en", label: "English" },
    { value: "tr", label: "Türkçe" },
  ];

  // const customStyles: StylesConfig<{ value: string; label: string }> = {
  //   option: (provided, state) => ({
  //     ...provided,
  //     color: "#fff",
  //     backgroundColor: state.isFocused ? "#000" : "#333",
  //     fontSize: "16px",
  //     padding: "6px",
  //     cursor: "pointer", // Cursor when hovering
  //   }),

  //   control: (provided) => ({
  //     ...provided,
  //     backgroundColor: "rgba(0, 0, 0, 0.8)",
  //     padding: "2px",
  //     border: "none",
  //     boxShadow: "none",
  //     borderRadius: 8,
  //   }),

  //   singleValue: (provided) => ({
  //     ...provided,
  //     color: "#fff",
  //     fontSize: "16px",
  //   }),

  //   menu: (provided) => ({
  //     ...provided,
  //     borderRadius: 4,
  //     backgroundColor: "#000",
  //   }),
  //   menuList: (provided) => ({
  //     ...provided,
  //     padding: 0, // Remove padding from menu list
  //     borderRadius: 4,
  //   }),
  //   indicatorSeparator: (provided) => ({
  //     ...provided,
  //     display: "none",
  //   }),
  // };

  const handleChangeLanguage = (
    selectedOption: SingleValue<{ value: string; label: string }>
  ) => {
    if (selectedOption) {
      i18n.changeLanguage(selectedOption.value);
    }
  };

  return (
    <Select
      options={options}
      defaultValue={{ value: "en", label: "English" }}
      //styles={customStyles}
      onChange={handleChangeLanguage}
    />
  );
};
