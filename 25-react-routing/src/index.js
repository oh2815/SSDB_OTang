import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // BrowserRouter를 import시켜줘서 App을 감싸줘야 한다.
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
