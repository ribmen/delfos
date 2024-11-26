import { ButtonStyled } from "./styles.button";

interface ButtonProps {
  label: string;
  disabled: boolean;
  color?: string; // primary, alert, info
  value?: string;
  onClick?: () => void;
  width?: string; // Adicionado
  height?: string; // Adicionado
}

export const ButtonComponent = ({
  label,
  disabled,
  onClick,
  width,
  height,
}: ButtonProps) => {
  return (
    <ButtonStyled
      disabled={disabled}
      onClick={onClick}
      width={width}
      height={height} // Repasse as props
    >
      {label}
    </ButtonStyled>
  );
};
