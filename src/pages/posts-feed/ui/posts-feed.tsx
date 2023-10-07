import "./posts-feed.scss";
import PostDisplayCard from "widgets/post-display-card";
import { VirtualAndInfiniteScroll } from "shared/ui";
import { useDispatch, useSelector } from "react-redux";
import { selectCachedPosts, loadMorePosts } from "entities/post";
import { useEffect } from "react";

const BATCH_SIZE = 10;
const LAST_POST_ID = 100;

const PostsFeed = () => {
  const dispatch = useDispatch();
  const { cachedPosts, postToComeBackTo } = useSelector(selectCachedPosts());

  useEffect(() => {
    // Go to the saved post number when the page is rendered
    if (postToComeBackTo)
      // Wait for the document to render
      setTimeout(() => {
        document.getElementById(postToComeBackTo.toString())?.scrollIntoView();
      }, 50);
  }, []);

  const elementsToDisplay = [];
  for (let i = 1; i <= cachedPosts; i++)
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
    dispatch(loadMorePosts(10));
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
