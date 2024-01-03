"use client";
import React from "react";
import { Disclosure } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

interface IProps {
  question: string;
  answer: string;
}

const QuestionAnswer = ({ question, answer }: IProps) => {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className="flex w-full items-start justify-between gap-4 text-start text-lg font-medium leading-5">
            <span>{question}</span>
            <FontAwesomeIcon
              className={
                open
                  ? "rotate-180 transform font-normal text-[#0B4E9D]"
                  : "font-normal text-[#817F9B]"
              }
              icon={faChevronDown}
            />
          </Disclosure.Button>
          <hr className="h-[2px] w-full bg-[#817F9B]" />
          <Disclosure.Panel className="flex w-full items-center justify-center text-start leading-5">
            <p>{answer}</p>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default QuestionAnswer;
