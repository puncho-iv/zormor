import { useState } from "react";

interface OutlineButtonProps {
  title?: string;
  containerStyles?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  imageSrc?: React.ReactNode;
  hoverImageSrc?: React.ReactNode;
}

const OutlineButton: React.FC<OutlineButtonProps> = ({
  title,
  imageSrc,
  hoverImageSrc,
  containerStyles,
  onClick,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <button
      className={` ${containerStyles} rounded-full btn_outline hover:text-white hover:bg-[#00949c96] hover:border-none`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <div className="flex items-center gap-2 px-3">
        {isHovered && hoverImageSrc && (
          <span className="flex items-center ">{hoverImageSrc}</span>
        )}
        {isHovered || imageSrc && (
          <span className="flex items-center ">{imageSrc}</span>
        )}
        {title}
      </div>
    </button>
  );
};

export default OutlineButton;
