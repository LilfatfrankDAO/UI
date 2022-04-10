import { Button as MUIButton } from "@mui/material";
import "./Button.scss";

const Button = ({ children, onClick, type, htmlType }) => {
  return (
    <MUIButton
      onClick={onClick}
      className={`button ${type === "secondary" ? "secondary" : "primary"}`}
      variant={"contained"}
      type={htmlType}
    >
      {children}
    </MUIButton>
  );
};

export default Button;
