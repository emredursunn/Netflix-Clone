import React from "react";
import { QuestionData } from "../../../utils/data";
import { Question } from "./Question";

type Props = {
  data: QuestionData[];
};

export const Accordion = ({ data }: Props) => {
  return (
    <div className="flex flex-col items-center w-full gap-2">
      {data.map((question, index) => (
        <Question
          key={index}
          question={question.question}
          answer={question.answer}
          index={index}
        />
      ))}
    </div>
  );
};
