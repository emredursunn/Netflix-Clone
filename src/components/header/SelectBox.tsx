import Select from "react-select";

const SelectBox = () => {
  const options = [
    { value: "EN", label: "English" },
    { value: "TR", label: "Turkish" },
  ];

  return <Select  options={options} />;
};

export default SelectBox;
