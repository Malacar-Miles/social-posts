import "./post-display-card.scss";
import { List } from "react-content-loader";
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

  const Content = () => {
    return (
      <>
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
      </>
    );
  };

  let dynamicClassName = "post-display-card";
  if (mode === "big") dynamicClassName += " full-page";
  if (mode === "small") dynamicClassName += " feed-item";

  return (
    <div className={dynamicClassName}>
      {isFetching ? (
        <div className="content-loader">
          <List />
        </div>
      ) : isError ? (
        <div className="error">Failed to load content</div>
      ) : isSuccess ? (
        <Content />
      ) : null}
    </div>
  );
};

export default PostDisplayCard;
