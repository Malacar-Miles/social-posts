import "./posts-feed.scss";
import { useGetAllPostsQuery } from "entities/post";
import PostDisplayCard from "widgets/post-display-card";
import { VirtualAndInfiniteScroll } from "shared/ui";

const PostsFeed = () => {
  const { data } = useGetAllPostsQuery();

  const elementsToDisplay = data?.map((post) => (
    <article className="post-feed-item" key={post.id}>
      <PostDisplayCard
        post={post}
        mode="small"
        buttonText="View"
        buttonTarget={`/posts/${post.id}`}
      />
    </article>
  ));

  const lastRowHandler = () => {
    console.log("lastRowHandler fired");
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
