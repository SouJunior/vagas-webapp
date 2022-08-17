import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login"
import App from "./App";


const Router = () => {
    return(
        <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/job" element={<App/>} />
        </Routes>
    );
};

export default Router;