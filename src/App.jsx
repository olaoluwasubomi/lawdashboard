import React,{useEffect} from "react";
import { Router } from "react-router-dom";
import Approutes from "./routes/Approutes";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
// import Newaccount from "./components/NewAccount/Newaccount";
const App = () =>{
  useEffect(() =>{
    AOS.init();
  },[])
  return(
    <div>
      <Approutes />
    </div>
  )
}
export default App;