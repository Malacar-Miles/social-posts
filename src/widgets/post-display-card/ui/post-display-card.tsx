import "./post-display-card.scss";
import type { Post } from "entities/post/model/types";

const PostDisplayCard = ({ post }: { post: Post }) => {
  const { userId, title, body } = post;
  return (
    <div className="post-display-card">
      <h3 className="post-title">
        {title}
      </h3>
      <span className="post-body">
        {body}
      </span>
      <span className="post-user-id">
        by User {userId}
      </span>
    </div>
  );
};

export default PostDisplayCard;
