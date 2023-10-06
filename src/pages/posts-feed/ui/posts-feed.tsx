import "./posts-feed.scss";
import { useGetAllPostsQuery } from "entities/post";
import PostDisplayCard from "widgets/post-display-card";

const PostsFeed = () => {
  const { data } = useGetAllPostsQuery();

  return (
    <main className="posts-feed">
      {data?.map((post) => (
        <article className="post-feed-item" id={post.id} key={post.id}>
          <PostDisplayCard post={post} />
        </article>
      ))}
    </main>
  );
};

export default PostsFeed;
