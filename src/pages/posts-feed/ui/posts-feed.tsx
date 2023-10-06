import { useGetAllPostsQuery } from "entities/post";

const PostsFeed = () => {
  const { data } = useGetAllPostsQuery();

  return (
    <div className="posts-feed">
      {data?.map((post) => (
        <div className="post-feed-item" key={post.id}>
          <p>
            <b>Post Id:</b> {post.id}
          </p>
          <p>
            <b>Title:</b> {post.title}
          </p>
          <p>
            <b>Body:</b> {post.body}
          </p>
          <p>
            <b>User Id:</b> {post.userId}
          </p>
          <br />
        </div>
      ))}
    </div>
  );
};

export default PostsFeed;
