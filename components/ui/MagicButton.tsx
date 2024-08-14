"use client";
import Image from "next/image";
const MagicButton = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
}: {
  title: string;
  icon?: string;
  position: string;
  handleClick?: () => void;
  otherClasses?: string;
}) => {
  return (
    <button
      className="relative inline-flex h-12 w-full overflow-hidden rounded-lg p-[1px] focus:outline-none md:w-60 md:mt-10"
      onClick={handleClick}
    >
      <div className="absolute inset-[-1000%] z-0 animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <div
        className={`relative inline-flex h-full w-full z-100 cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-3 ${otherClasses}`}
      >
        {position === "left" && icon && (
          <Image
            src={icon}
            alt={title}
            width={24}
            height={24}
            className="w-6 h-auto"
          />
        )}
        {title}
        {position === "right" && icon && (
          <Image
            src={icon}
            alt={title}
            width={24}
            height={24}
            className="w-6 h-auto"
          />
        )}
      </div>
    </button>
  );
};

export default MagicButton;
