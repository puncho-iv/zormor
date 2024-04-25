interface PrimaryButtonProps {
  title: React.ReactNode;
  containerStyles?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  imageSrc?: React.ReactNode;
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  title,
  imageSrc,
  containerStyles,
  onClick,
}) => {
  return (
    <button
      className={` ${containerStyles} rounded-full btn_primary w-full hover:bg-[#00949c96] `}
      onClick={onClick}
    >
      <div className="flex items-center gap-2 px-3  ">
        {imageSrc && <span className="flex items-center">{imageSrc}</span>}
        {title}
      </div>
    </button>
  );
};

export default PrimaryButton;
