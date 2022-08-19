import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import InsertJobs from "./pages/InsertJobs";
import Layout from "./pages/Layout";
import Login from "./pages/Login";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Login />} />
          <Route path="/InsertJobs" element={<InsertJobs />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
