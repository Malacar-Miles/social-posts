import "./nav-button.scss";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setPostToComeBackTo } from "entities/post";



const NavButton = ({
  children,
  targetPath,
  postId,
}: {
  children: React.ReactNode;
  targetPath?: string;
  postId?: string;
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    if (postId) dispatch(setPostToComeBackTo(postId));
    if (targetPath) navigate(targetPath);
  };

  return (
    <button className="nav-button" onClick={handleClick}>
      {children}
    </button>
  );
};

export { NavButton };
