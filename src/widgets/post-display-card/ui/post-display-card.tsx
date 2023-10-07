import "./post-display-card.scss";
import type { Post } from "entities/post";
import { useGetPostQuery } from "entities/post";
import { NavButton } from "shared/ui";

const PostDisplayCard = ({
  postId,
  mode,
  buttonText,
  buttonTarget,
}: {
  postId: string;
  mode?: string;
  buttonText?: string;
  buttonTarget?: string;
}) => {
  const { data, isFetching, isSuccess, isError } = useGetPostQuery(postId);

  let dynamicClassName = "post-display-card";
  if (mode === "big") dynamicClassName += " full-page";
  if (mode === "small") dynamicClassName += " feed-item";

  return (
    <div className={dynamicClassName}>
      {mode !== "big" && <span className="post-id">{postId}</span>}
      <div className="post-wrapper">
        <h3 className="post-title">{data?.title}</h3>
        <span className="post-body">{data?.body}</span>
        <span className="post-user-id">by User {data?.userId}</span>
        {buttonTarget && (
          <NavButton targetPath={buttonTarget} postId={postId}>
            {buttonText}
          </NavButton>
        )}
      </div>
    </div>
  );
};

export default PostDisplayCard;
