import React, { useState , useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Newaccount = () =>{

    let movement = useNavigate();
    const[data, setdata] = useState([]);
    const[firstname, setfirstname] = useState("")
    const[lastname, setlastname] = useState("")
    const[email, setemaii] = useState("")
    const[password, setpassword] = useState("")
    const[passwordError, setPasswordError] =  useState("");
    useEffect(() =>{
        const getData =  async() =>{
            try{
                const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
                setdata(response.data)
            }
            catch(error){
                window.alert("There is an error", error);

            }
        }

        getData();
    },[])


    const putData = async (e) => {
        e.preventDefault();
        const validation = fieldvalidation();
        const emailChecker = emailValidation();
        const passwordChecker = passwordValidation();

        if(validation && emailChecker && passwordChecker){
            try{
                const result = await axios.post("https://jsonplaceholder.typicode.com/posts" , {
                    userId:password,
                    id:firstname,
                    title:lastname,
                    body:email
                });
                window.alert("Account Created..Please log in with your details", result.data);
    
                setfirstname("")
                setlastname("")
                setemaii("")
                setpassword("")
                movement("/", {replace: true})
            }
            catch(error){
                window.alert("There is an error", error);
            }
        }
    }

    const handlefirstname = (e) =>{
        setfirstname(e.target.value)
    }

    const handlelastname = (e) =>{
        setlastname(e.target.value)
    }

    const handlemail = (e) =>{
        setemaii(e.target.value)
    }

    const hanlepassword = (e) =>{
        setpassword(e.target.value)
    }


    const fieldvalidation = () =>{
        if (!firstname || !lastname || !password || !email == null){
            window.alert("Fields cannot be empty");
            return false;
        }

        return true;
    }


    const emailValidation = () => {
        if(email && /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email) == true){
            return true;
        }
        else{
            window.alert("Invalid Email Address")
        }
        return false;
    }

    const passwordValidation = () =>{
        if(password && !/\d/.test(password) == true && password.length<10){
            window.alert("Password must contain a digit");
            // setPasswordError("Invalid Password");
            return false;
        }
        else if(password.length<10){
            window.alert("Password should be 10 characters and above ");
            return false;
        }
        return true;
    }
    return(
        <div className="newaccountImage h-screen lg:p-20 md:p-20 sm:py-20 px-10">
            <div className="bg-slate-50 py-5 px-16 mx-auto rounded-xl lg:w-1/3 md:w-1/2 sm:w-full lg:px-16 md:px-10 sm:px-5" data-aos="fade-up" data-aos-duration="2000">
                <p className="text-center text-3xl italic">The Logo</p>
                <form className="my-10">
                    <label className="mb-1 block text-base" htmlFor="First Name">First Name:</label>
                    <input 
                    className="block w-full py-2 px-0 mb-8 outline-none border-b-2 border-b-yellow-900 bg-transparent" 
                    type="text" 
                    onChange={handlefirstname}
                    value={firstname}
                    placeholder="First Name" required />


                    <label className="mb-1 block text-base" htmlFor="Last Name">Last Name:</label>
                    <input 
                    className="block w-full py-2 px-0 mb-8 outline-none border-b-2 border-b-yellow-900 bg-transparent" 
                    type="text" 
                    onChange={handlelastname}
                    value={lastname}
                    placeholder="Last Name:" required/>


                    <label className="mb-1 block text-base" htmlFor="email">Email Address</label>
                    <input 
                    className="block w-full py-2 px-0 mb-8 outline-none border-b-2 border-b-yellow-900 bg-transparent" 
                    type="email" 
                    onChange={handlemail}
                    value={email}
                    placeholder="Email Address" required />


                    <label className="mb-1 block text-base" htmlFor="password">Password</label>
                    <input 
                    className="block w-full py-2 px-0 mb-8 outline-none border-b-2 border-b-yellow-900 bg-transparent" 
                    type="password"  
                    onChange={hanlepassword}
                    value={password}
                    placeholder="Password" required />

                    {/* {passwordError && <span>{passwordError}</span>} */}

                    <Link to="/" className="bg-gray-400 py-2  block text-white uppercase rounded-xl text-center lg:w-1/3 md:w-1/3 sm:w-full" onClick={putData}>Signup</Link>                
                </form>
            </div>
        </div>
    )
}
export default Newaccount;