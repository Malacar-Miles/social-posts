import { useGetPostQuery } from "entities/post";
import { useParams } from "react-router-dom";

const PostDetails = () => {
  const { postId } = useParams();
  const { data } = useGetPostQuery(postId);
  return (
    <div className="post-details">
      <p>
        <b>Post Id:</b> {data?.id}
      </p>
      <p>
        <b>Title:</b> {data?.title}
      </p>
      <p>
        <b>Body:</b> {data?.body}
      </p>
      <p>
        <b>User Id:</b> {data?.userId}
      </p>
    </div>
  );
};

export default PostDetails;
