import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Lecture from "./pages/Lecture";
import Practice from "./pages/Practice";
import Matzip from "./pages/Matzip";
import Codingon from "./pages/Codingon";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/lecture" element={<Lecture />}></Route>
        <Route path="/practice" element={<Practice />}></Route>
        <Route path="/practice/matzip" element={<Matzip />}></Route>
        <Route path="/practice/codingon" element={<Codingon />}></Route>
      </Routes>
    </div>
  );
}

export default App;
