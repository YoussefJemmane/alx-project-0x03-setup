import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({
  title,
  onClick,
  size = "medium",
  shape = "rounded"
}) => {
  const sizeClasses = {
    small: "px-3 py-1 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg"
  };

  const shapeClasses = {
    rounded: "rounded-md",
    circular: "rounded-full",
    square: "rounded-none"
  };

  return (
    <button
      className={`bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors duration-200 ${sizeClasses[size]} ${shapeClasses[shape]}`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
