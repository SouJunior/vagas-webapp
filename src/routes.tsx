import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login"
import App from "./App";
import Home from "./pages/Home";


const Router = () => {
    return(
        <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/job" element={<App/>} />
            <Route path="/home" element={<Home />}/>
        </Routes>
    );
};

export default Router;