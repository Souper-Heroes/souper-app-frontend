import React from "react";
import Navbar from "../components/layout/Navbar";
import SouperFooter from "../components/layout/SouperFooter";
import ResetPassword from "../components/Login/ResetPassword"

function Page() {
    return (
     <>
        <Navbar />
        <ResetPassword />
        <SouperFooter />
     </>
    );
}

export default Page;
