import "./post-display-card.scss";
import type { Post } from "entities/post/model/types";

const PostDisplayCard = ({ post, mode }: { post: Post; mode?: string }) => {
  const { userId, title, body } = post;
  const dynamicClassName =
    `post-display-card ${mode === "big" && "full-page"} ${mode === "small" && "feed-item"}`;

  return (
    <div className={dynamicClassName}>
      <h3 className="post-title">{title}</h3>
      <span className="post-body">{body}</span>
      <span className="post-user-id">by User {userId}</span>
    </div>
  );
};

export default PostDisplayCard;
