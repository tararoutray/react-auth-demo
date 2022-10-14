import React from "react";
import { Outlet } from "react-router-dom";
import AuthFooter from "./footer/AuthFooter";
import AuthNavbar from "./navbar/AuthNavbar";

const Auth = () => {
    return (
        <React.Fragment>
            <AuthNavbar />
            <Outlet />
            <AuthFooter />
        </React.Fragment>
    );
}

export default Auth;