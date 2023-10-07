import "./post-details.scss";
import { useParams } from "react-router-dom";
import PostDisplayCard from "widgets/post-display-card";

const PostDetails = () => {
  const { postId } = useParams();
  return (
    <main className="post-details">
      <h2 className="page-title">Post Details</h2>
      {postId && (
        <PostDisplayCard
          postId={postId}
          mode="big"
          buttonText="Back"
          buttonTarget="/"
        />
      )}
    </main>
  );
};

export default PostDetails;
