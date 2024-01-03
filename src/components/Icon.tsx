import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

interface IProps {
  link: string;
  iconName: IconDefinition;
}

const Icon = ({ link, iconName }: IProps) => {
  return (
    <a href={link} target="__blank" rel="noopener">
      <span className="fa-stack fa-fw">
        <FontAwesomeIcon
          icon={faCircle}
          className="fa-stack-2x text-white/10"
        />
        <FontAwesomeIcon icon={iconName} className="fa-stack-1x" />
      </span>
    </a>
  );
};

export default Icon;
