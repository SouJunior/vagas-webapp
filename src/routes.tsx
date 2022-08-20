import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import App from "./App";
import Home from "./pages/Home";

const Router = () => {
    return (
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Login />} />
            <Route path="/job" element={<App />} />
        </Routes>
    );
};

export default Router;
