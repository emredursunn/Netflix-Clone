import { ReactNode } from "react";
import Box from "../Box";
import { motion } from "framer-motion";
import { FadeIn } from "../../../utils/variants";

type Props = {
  title: string;
  description: string;
  reverse: boolean;
  children: ReactNode;
};

const Guidance = ({ title, description, reverse, children }: Props) => {
  return (
    <Box>
      <section
        className={`flex flex-col ${
          reverse ? "lg:flex-row-reverse" : "lg:flex-row"
        } lg:gap-20 justify-center py-12 items-center`}
      >
        <motion.div
          variants={FadeIn({
            direction: reverse ? "left" : "right",
            delay: 0,
          })}
          initial={"hidden"}
          whileInView={"show"}
          viewport={{once:true, amount:0.7}}
        >
          <article className="flex flex-col gap-6 text-center flex-wrap max-w-md">
            <label className="text-3xl lg:text-5xl font-bold">{title}</label>
            <span className="text-xl lg:text-2xl">{description}</span>
          </article>
        </motion.div>
        <motion.div
          variants={FadeIn({
            direction: reverse ? "right" : "left",
            delay: 0,
          })}
          initial={"hidden"}
          whileInView={"show"}
        >
          {children}
        </motion.div>
      </section>
    </Box>
  );
};

export default Guidance;
