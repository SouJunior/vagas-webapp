import { Route, Routes } from "react-router-dom";
import InsertJobs from "./pages/InsertJobs";
import Login from "./pages/Login";


function App() {
  return (
      <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/InsertJobs" element={<InsertJobs/>} />
      </Routes>
  );
}

export default App;
