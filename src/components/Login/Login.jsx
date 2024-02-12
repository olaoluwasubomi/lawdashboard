import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaAppleAlt } from "react-icons/fa";
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import { useLocation } from "react-router-dom";
import Newaccount from "../NewAccount/Newaccount";
import Admin from "../Admin/Admin";
const Login = () =>{

  let navigate = useNavigate();


  const[getdata,setdata] = useState([]);
  const[password, setpassword] = useState("");
  const[username, setusername] = useState("");

  useEffect(() =>{
    const fetchData = async() =>{
      try{
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
        setdata(response.data)
      }
      catch(error){
        window.alert("There is an error", error)
      }
    }
    fetchData();
  },[])

  const handleUsername =(event) =>{
    setusername(event.target.value);
  }

  const handlepassword =  (event) =>{
    setpassword(event.target.value);
  }


  const postData = async (e) => {
    e.preventDefault();
    const usernamecheck = usernamevalidate();
    const validate = formvalidate();

    if(validate && usernamecheck) {
      try{
        const result = await axios.post("https://jsonplaceholder.typicode.com/posts", {
          title: username,
          body: password
        });

        setpassword("");
        setusername("");

        window.alert("Login Successful", result.data);

        navigate("/administration", {replace: true});

      }
      catch(error){
        window.alert("There is an error", error)
      }
    }

  }
  const formvalidate = () =>{
    if(password == ""){
      window.alert("Plese enter your password");
      return false;

    } else if(password.trim().length == 0){
      window.alert("Password must contain atleast a character");
      return false;
    }

    return true;
  }
  
  const usernamevalidate = () =>{
    if(username == ""){
      window.alert("Enter your username");
      return false;
    }
    return true;

  }
  
  return(
    <div className="loginImage py-20 px-20 h-screen md:py-20 md:px-20 sm:py-5 sm:px-5">
        <div className="bg-white py-5 mx-auto my-2 rounded-xl lg:w-1/3 md:w-4/6 sm:w-full sm:my-20 sm:px-5 md:px-10 lg:px-12" data-aos="fade-down" data-aos-duration="2000">
        <p className="text-center text-3xl italic">Thelogo</p>
        <form className="my-10">
          <label className="mb-2 block text-xl" htmlFor="text">Username:</label>
          <input 
          onChange={handleUsername}
          className="block w-full py-3 px-0 mb-8 outline-none border-b-2 border-b-yellow-900 bg-transparent" 
          type="text" 
          placeholder="Username"
          value={username} 
          required />

          <label className="mb-2 block text-xl" htmlFor="password">Password:</label>
          <input 
          onChange={handlepassword}
          className="block w-full py-3 px-0 mb-8 outline-none border-b-2 border-b-yellow-900 bg-transparent" 
          type="password" 
          placeholder="Password"
          value={password}  
          required />

          <div className="flex items-center justify-between w-full gap-x-12 mx-auto">
            {/* <Link>login <Link to="/administration"></Link></Link> */}

            {/* <a href="#"
            className="bg-gray-400 py-2 w-1/3 text-white uppercase rounded-xl text-center"
            onClick={postData}> <Link to="/administration"></Link>Login</a> */}

            <button 
            className="bg-gray-400 py-2 w-1/3 text-white uppercase rounded-xl text-center block" 
            onClick={postData}>login </button>
            <Link to="/new-account" 
            className="bg-gray-400 py-2 w-1/3 text-white uppercase rounded-xl text-center">Signup</Link>
          </div>




          <div className="mt-10 text-xl text-center">
            <p>Or Log in With:</p>
            <div className="flex items-center justify-center gap-x-12 my-8">
            <a href="https://github.com/olaoluwasubomi"><FaGoogle className="text-2xl"/></a>
            <a href="https://github.com/olaoluwasubomi"><FaGithub className="text-2xl" /></a>
            <a href="https://github.com/olaoluwasubomi"><FaAppleAlt className="text-2xl" /></a>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
export default Login;