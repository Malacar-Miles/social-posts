import "./posts-feed.scss";
import { useGetAllPostsQuery } from "entities/post";
import PostDisplayCard from "widgets/post-display-card";

const PostsFeed = () => {
  const { data } = useGetAllPostsQuery();

  return (
    <main className="posts-feed">
      {data?.map((post) => (
        <article className="post-feed-item" key={post.id}>
          <PostDisplayCard
            post={post}
            mode="small"
            buttonText="View"
            buttonTarget={`/posts/${post.id}`}
          />
        </article>
      ))}
    </main>
  );
};

export default PostsFeed;
