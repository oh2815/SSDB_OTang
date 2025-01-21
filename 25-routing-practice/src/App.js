import { Route, Routes } from "react-router-dom";
import Index from "./pages";
import PracticeHeader from "./components/PracticeHeader";
import NotFound from "./pages/404";
import "./style/common.css";
import Student from "./pages/Student";

function App() {
  return (
    <>
      <PracticeHeader />
      <Routes>
        <Route path="/" element={<Index />} />
        {/* params key의 이름 경로  */}
        <Route path="/student/:name" element={<Student />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
