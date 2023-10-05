import "./index.scss";

import { BrowserRouter } from "react-router-dom";
import Routing from "pages";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routing />
      </div>
    </BrowserRouter>
  );
}

export default App;
