import { useState } from "react";
import { CancelIcon, SearchGreenIcon, SearchIcon } from "../assets/icons/Icons";

interface InputProps {
  type: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  onCancel?: () => void;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const SearchInput: React.FC<InputProps> = ({
  type,
  placeholder,
  value,
  onChange,
  onCancel,
  onClick,
}) => {
  const [isTyping, setIsTyping] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    onChange(inputValue);
    setIsTyping(inputValue.length > 0);
  };

  const handleCancelClick = () => {
    onChange(""); // Clear the input value
    setIsTyping(false);
    onCancel && onCancel();
  };

  return (
    <div className="relative">
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleInputChange}
        className="h-14 min-w-[250px] rounded-full pl-10" // Added left padding to prevent overlap
      />
      <div
        className="absolute inset-y-0 left-0 flex items-center p-4 cursor-pointer"
        onClick={onClick}
      >
        <span
          role="img"
          aria-label="Search"
          className="mt-1"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {isHovered ? <SearchGreenIcon /> : <SearchIcon />}
        </span>
      </div>
      <div
        className="absolute inset-y-0 right-0 flex items-center p-4 cursor-pointer"
        onClick={isTyping ? handleCancelClick : undefined}
      >
        {isTyping && (
          <>
            <span>
              <CancelIcon />
            </span>
          </>
        )}
      </div>
    </div>
  );
};

export default SearchInput;
