import React from "react";
import { Answer } from ".";

const AnswersList = (props: any) => {
  return (
    <div className="c-grid__answer">
      {props.answers.map((value: any, index: any) => {
        return <Answer key={index.toString()} content={value.content}></Answer>;
      })}
    </div>
  );
};

export default AnswersList;
