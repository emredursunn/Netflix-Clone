import React, { createContext, ReactNode, useState } from "react";

export interface IAccordionContext {
  selectedIndex: number;
  setSelectedIndex: (num: number) => void;
}

interface IAccordionContextProvider {
  children: ReactNode;
}

const INITIAL_STATE: IAccordionContext = {
  selectedIndex: 0,
  setSelectedIndex: () => {},
};

export const AccordionContext = createContext<IAccordionContext>(INITIAL_STATE);

export const AccordionContextProvider: React.FC<IAccordionContextProvider> = ({
  children,
}) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);

  const value = { selectedIndex, setSelectedIndex };

  return (
    <AccordionContext.Provider value={value}>
      {children}
    </AccordionContext.Provider>
  );
};
