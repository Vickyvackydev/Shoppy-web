import { ButtonTypeProps } from "@/types";
import React from "react";

function Button(props: ButtonTypeProps) {
  return (
    <button
      type={props.type}
      disabled={props.disabled}
      className={`bg-gray-700 lg:px-5 px-4 lg:py-[5.5px] py-[4px] rounded-2xl hover:bg-orange-500 hover:scale-105 transition-all duration-300 ${props.btnStyles}`}
      onClick={props.handleClick}
    >
      <span className="text-white font-medium lg:text-sm text-xs">
        {props.text}
      </span>
    </button>
  );
}

export default Button;
