import React from "react";
import { Routes , Route } from "react-router-dom";

import Login from "../components/Login/Login";
import Newaccount from "../components/NewAccount/Newaccount";
import Admin from "../components/Admin/Admin";

const Approutes = () =>{
    return(
        <>
            <Routes>
                <Route name="login" path="/" element={<Login />}></Route>
                <Route name="newaccount" path="/new-account" element={<Newaccount />}></Route>
                <Route name="admin" path="/administration" element={<Admin />}></Route>
            </Routes>
        </>
    )
}
export default Approutes;