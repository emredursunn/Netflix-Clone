import  { ReactNode } from "react";
import Box from "../Box";

type Props = {
  title: string;
  description: string;
  reverse: boolean;
  children: ReactNode;
};

const Guidance = ({ title, description, reverse, children }: Props) => {
  return (
    <Box>
      <div
        className={`flex flex-col ${
          reverse ? "lg:flex-row-reverse" : "lg:flex-row"
        } lg:gap-20 justify-center py-12 items-center`}
      >
        <div className="flex flex-col gap-6 text-center flex-wrap max-w-md">
          <p className="text-3xl lg:text-5xl font-bold">{title}</p>
          <p className="text-xl lg:text-2xl">{description}</p>
        </div>
        {children}
      </div>
    </Box>
  );
};

export default Guidance;
