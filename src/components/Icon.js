import React from "react";
// IMPORTING react-icon
import { AiOutlineHeart, AiFillHeart, AiOutlineBorder } from "react-icons/ai";

// circle - AiOutlineHeart
// cross - AiFillHeart
// default - AiTwotoneCloseCircle

const Icon = ({ name }) => {
  switch (name) {
    case "circle":
      return <AiOutlineHeart className="icons" />;
    case "cross":
      return <AiFillHeart className="icons" />;
    default:
      return <AiOutlineBorder className="icons" />;
  }
};

export default Icon;
