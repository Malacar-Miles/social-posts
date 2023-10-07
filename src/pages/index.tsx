import { Routes, Route } from "react-router-dom";
import PageNotFound from "./page-not-found";
import PostDetails from "./post-details";
import PostsFeed from "./posts-feed";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<PostsFeed />} />
      <Route path="posts/:postId" element={<PostDetails />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default Routing;
