import "./post-display-card.scss";
import type { Post } from "entities/post/model/types";
import { NavButton } from "shared/ui";

const PostDisplayCard = ({
  post,
  mode,
  buttonText,
  buttonTarget,
}: {
  post: Post;
  mode?: string;
  buttonText?: string;
  buttonTarget?: string;
}) => {
  const { id, userId, title, body } = post;

  let dynamicClassName = "post-display-card";
  if (mode === "big") dynamicClassName += " full-page";
  if (mode === "small") dynamicClassName += " feed-item";

  return (
    <div className={dynamicClassName}>
      {mode !== "big" && <span className="post-id">{id}</span>}
      <div className="post-wrapper">
        <h3 className="post-title">{title}</h3>
        <span className="post-body">{body}</span>
        <span className="post-user-id">by User {userId}</span>
        {buttonTarget && (
          <NavButton targetPath={buttonTarget}>{buttonText}</NavButton>
        )}
      </div>
    </div>
  );
};

export default PostDisplayCard;
