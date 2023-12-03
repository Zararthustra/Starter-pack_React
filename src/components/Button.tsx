import { IconLoader } from "@assets/index";

interface IButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  primary?: boolean;
  style?: object;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset" | undefined;
  loading?: boolean;
  onClick?: any;
}

export const Button = ({
  primary,
  loading,
  style,
  disabled,
  type = "button",
  className = "",
  onClick,
  children,
}: IButtonProps) => (
  <button
    disabled={disabled}
    type={type}
    style={style}
    className={`
    flex items-center gap-2
      ${primary ? "btn-primary" : "btn-secondary"}
      ${className} 
      `}
    onClick={onClick}
  >
    {loading ? <IconLoader color={primary ? "white" : ""} /> : children}
  </button>
);
