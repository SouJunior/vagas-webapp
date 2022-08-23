/* aqui estara a pagina de Layout*/
import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <Outlet />
        </>
    )
}

export default Layout;