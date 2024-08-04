import React, { useContext, useEffect, useRef, useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import { AccordionContext } from "../../../context/Context";
import { useTranslation } from "react-i18next";

type Props = {
  question: string;
  answer: string;
  index: number;
};

export const Question = ({ question, answer, index }: Props) => {
  const { selectedIndex, setSelectedIndex } = useContext(AccordionContext);
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(0);
  const { t } = useTranslation();

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [selectedIndex]);

  const props = useSpring({
    height: index === selectedIndex ? `${contentHeight}px` : "0px",
    config: { duration: 200 }, // Animasyon süresi
  });

  const toggleAnswer = () => {
    setSelectedIndex(index === selectedIndex ? -1 : index);
  };

  return (
    <div className="flex flex-col w-10/12 lg:w-2/3 h-full rounded-sm text-white">
      <button
        onClick={toggleAnswer}
        className="flex items-center justify-between bg-dark_gray hover:bg-opacity-90 w-full border-b-2 border-b-primary_1  px-6  py-2"
      >
        <span className="text-xl">{t(`question${index + 1}`)}</span>
        <span className="text-5xl">{index === selectedIndex ? "x" : "+"}</span>
      </button>
      <animated.div
        ref={contentRef}
        style={{ ...props }}
        className="bg-dark_gray w-full flex flex-wrap overflow-y-auto"
      >
        {index === selectedIndex && (
          <p className="text-xl p-8 lg:p-4">{t(`answer${index + 1}`)}</p>
        )}
      </animated.div>
    </div>
  );
};
