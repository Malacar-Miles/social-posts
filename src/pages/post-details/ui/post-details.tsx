import { useGetPostQuery } from "entities/post";
import { useParams, useNavigate } from "react-router-dom";
import PostDisplayCard from "widgets/post-display-card";

const PostDetails = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const { data, isError } = useGetPostQuery(postId);
  if (isError === true) navigate("/notfound");
  return (
    <main className="post-details">
      {data && <PostDisplayCard post={data} />}
    </main>
  );
};

export default PostDetails;
