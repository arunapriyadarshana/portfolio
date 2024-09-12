import React from "react";

const Button = ({
  title,
  hadleClick,
}: {
  title: string;
  hadleClick: () => void;
}) => {
  return (
    <button
      onClick={hadleClick}
      className="shadow-[0_4px_14px_0_rgb(0,0,0,10%)] hover:shadow-[0_6px_20px_rgba(93,93,93,23%)] dark:shadow-[0_2px_6px_0_rgb(255,255,255,30%)] px-8 py-1 bg-background text-[#696969] dark:text-slate-200 rounded-md font-light transition duration-200 ease-linear"
    >
      {title}
    </button>
  );
};

export default Button;
