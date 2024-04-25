import PrimaryButton from "../PrimaryButton";

interface ICardProps {
  imageSrc: string;
  title: string;
  description: string;
  buttonText: string;
  onButtonClick: () => void;
}

const Card = ({
  imageSrc,
  title,
  description,
  buttonText,
  onButtonClick,
}: ICardProps) => {
  return (
    <div className="bg-white min-w-[250px] rounded-lg overflow-hidden shadow-lg">
      <div className="p-4">
        <img src={imageSrc} alt={title} className="w-full h-40 object-cover" />
      </div>
      <div className="p-4">
        <h2 className="text-lg font-bold">{title}</h2>
        <p className="text-gray-600">{description}</p>

        <div className="mt-4">
          <PrimaryButton
            title={"View Details"}
            containerStyles="h-12"
            onClick={onButtonClick}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
