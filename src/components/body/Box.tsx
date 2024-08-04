import  { ReactNode } from "react";
import Seperator from "./Seperator";

type Props = { children: ReactNode };

const Box = ({ children }: Props) => {
  return (
    <div className=" text-white bg-primary_1 w-screen">
      <Seperator />
      {children}
    </div>
  );
};

export default Box;
