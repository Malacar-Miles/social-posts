import "./nav-button.scss";
import { useNavigate } from "react-router-dom";

const NavButton = ({
  children,
  targetPath,
}: {
  children: React.ReactNode;
  targetPath?: string;
}) => {
  const navigate = useNavigate();
  const handleClick = () => {
    if (targetPath) navigate(targetPath);
  };

  return (
    <button className="nav-button" onClick={handleClick}>
      {children}
    </button>
  );
};

export { NavButton };
