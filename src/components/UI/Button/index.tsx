import Loader from "@components/Loader";
import { FC } from "react";

interface ButtonProps {
  children: React.ReactNode;
  isLoading?: boolean;
  cls?: string;
  disabled?: boolean;
}

const Button: FC<ButtonProps> = ({
  children,
  isLoading,
  cls,
  disabled,
  ...props
}) => {
  return (
    <button
      {...props}
      disabled={disabled}
      className={`flex justify-center items-center ${cls} `}
    >
      {isLoading ? <Loader /> : children}
    </button>
  );
};

export default Button;
