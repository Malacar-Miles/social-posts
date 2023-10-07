import { NavButton } from "shared/ui";
import "./page-not-found.scss";

const PageNotFound = () => {
  return(
    <main className="page-not-found">
      <h2 className="error-message">Content Not Found or Failed to Load</h2>
      <NavButton targetPath="/">Home</NavButton>
    </main>
  );
};

export default PageNotFound;