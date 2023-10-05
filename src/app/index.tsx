import "./index.scss";

import { BrowserRouter } from "react-router-dom";
import Routing from "pages";
import { ReduxStoreProvider } from "./providers";

function App() {
  return (
    <BrowserRouter>
      <ReduxStoreProvider>
        <div className="App">
          <Routing />
        </div>
      </ReduxStoreProvider>
    </BrowserRouter>
  );
}

export default App;
