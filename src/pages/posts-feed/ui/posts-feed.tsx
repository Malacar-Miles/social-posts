import "./posts-feed.scss";
import PostDisplayCard from "widgets/post-display-card";
import { VirtualAndInfiniteScroll } from "shared/ui";
import { useState } from "react";

const BATCH_SIZE = 10;
const LAST_POST_ID = 100;

const PostsFeed = () => {
  const [lastLoadedPost, setLastLoadedPost] = useState(20);

  const elementsToDisplay = [];
  for (let i = 1; i <= lastLoadedPost; i++)
    elementsToDisplay.push(
      <article className="post-feed-item" key={i}>
        <PostDisplayCard
          postId={i.toString()}
          mode="small"
          buttonText="View"
          buttonTarget={`/posts/${i}`}
        />
      </article>
    );

  const lastRowHandler = () => {
    // Increase the post count when the last post is in view
    const newPostCount = Math.min(lastLoadedPost + BATCH_SIZE, LAST_POST_ID);
    setLastLoadedPost(newPostCount);
  };

  return (
    <main className="posts-feed">
      <h2 className="page-title">All Posts</h2>
      {elementsToDisplay && (
        <VirtualAndInfiniteScroll
          height="6.8em"
          listItems={elementsToDisplay}
          lastRowHandler={lastRowHandler}
        />
      )}
    </main>
  );
};

export default PostsFeed;
