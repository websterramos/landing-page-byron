import React from "react";
import QuestionAnswer from "@/components/QuestionAnswer";

const Faq = () => {
  return (
    <section
      id="faq"
      className="flex h-full items-center justify-center bg-white px-4 py-8 text-[#012130] lg:px-40 lg:py-24"
    >
      <div id="faq-div" className="max-w-7xl">
        <div
          id="faq-content"
          className="flex flex-col justify-center gap-8 lg:gap-16"
        >
          <div
            id="faq-text"
            className="flex flex-col items-start justify-center gap-4"
          >
            <h5 className="text-2xl uppercase leading-8 text-[#0B4E9D] lg:text-[33px]">
              Perguntas Frequentes
            </h5>
            <h4 className="text-[33px] leading-[49px] tracking-wide text-[#011730] lg:text-5xl">
              Possui alguma dúvida?
            </h4>
          </div>

          <div
            id="faq-questions"
            className="flex w-full flex-col items-center justify-center gap-8 rounded-lg bg-[#DCF4FF] px-6 py-8 text-black lg:w-[1120px]"
          >
            <QuestionAnswer
              question="Pellentesque egestas odio eu nisi pretium pulvinar. Pellentesque non finibus augue?"
              answer="Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut rutrum leo arcu, accumsan aliquet nisl vestibulum ut. Integer semper purus nec tempus pellentesque. Nam auctor, neque id eleifend bibendum, est nibh sollicitudin sem, ut tempor nisi justo ultricies sapien."
            />
            <QuestionAnswer
              question="Pellentesque egestas odio eu nisi pretium pulvinar. Pellentesque non finibus augue?"
              answer="Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut rutrum leo arcu, accumsan aliquet nisl vestibulum ut. Integer semper purus nec tempus pellentesque. Nam auctor, neque id eleifend bibendum, est nibh sollicitudin sem, ut tempor nisi justo ultricies sapien."
            />
            <QuestionAnswer
              question="Pellentesque egestas odio eu nisi pretium pulvinar. Pellentesque non finibus augue?"
              answer="Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut rutrum leo arcu, accumsan aliquet nisl vestibulum ut. Integer semper purus nec tempus pellentesque. Nam auctor, neque id eleifend bibendum, est nibh sollicitudin sem, ut tempor nisi justo ultricies sapien."
            />
            <QuestionAnswer
              question="Pellentesque egestas odio eu nisi pretium pulvinar. Pellentesque non finibus augue?"
              answer="Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut rutrum leo arcu, accumsan aliquet nisl vestibulum ut. Integer semper purus nec tempus pellentesque. Nam auctor, neque id eleifend bibendum, est nibh sollicitudin sem, ut tempor nisi justo ultricies sapien."
            />
            <QuestionAnswer
              question="Pellentesque egestas odio eu nisi pretium pulvinar. Pellentesque non finibus augue?"
              answer="Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut rutrum leo arcu, accumsan aliquet nisl vestibulum ut. Integer semper purus nec tempus pellentesque. Nam auctor, neque id eleifend bibendum, est nibh sollicitudin sem, ut tempor nisi justo ultricies sapien."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
