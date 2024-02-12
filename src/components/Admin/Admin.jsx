import React from "react";
import Nav from "./Navigation/Nav";
import Body from "./Body/Body";
const Admin = () =>{
    return(
        <div className="flex items-start justify-between w-full bg-red-900 h-full relative">
            <Nav />
            <Body />
        </div>
    )
}
export default Admin;