import React, { useState, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { RiAdminLine } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import { bodydata } from "./bodydata";
import { PieChart, Pie, Cell, Tooltip, Sector } from 'recharts';
import { casedata } from "./casesdata";
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Legend } from 'recharts';
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Body = () => {
  const [showOptions, setShowOptions] = useState(false);
  const [showDays, setshowDays] = useState(false);

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const toggleDays = () =>{
    setshowDays(!showDays);
  }
  const COLORS = [
    ['#428a7a', '#00C49F', '#FFBB28', '#FF8042'],
    ['#428a7a', '#00FF00', '#0000FF', '#FFFF00'],
    ['#428a7a', '#FFA500', '#008080', '#00FFFF'],
  ];

  const handleBody = bodydata.map((items, i) => {
    const piedata = [{ name: items.desc, value: items.number, endvalue: items.newno }];
    return (
      <div key={i} className="flex items-start justify-between mt-5 borderline border-black" data-aos="fade-down" data-aos-duration="1500">
        <div className="py-2 w-full">
          <h3 className="text-3xl font-bold">{items.number}</h3>
          <p className="text-xl">{items.desc}</p>
          <span className="block w-full text-lg capitalize mt-2">{items.text}</span>
        </div>
        <PieChart width={200} height={100}>
          <Pie
            data={piedata}
            cx={120}
            cy={70}
            innerRadius={20}
            outerRadius={40}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          >
            {piedata.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[i][index % COLORS[i].length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </div>
    );
  });

  const bardata = [
    {
      title:"January",
      completed:"150",
      uncompleted:"20"
    },
    {
      title:"Febuary",
      completed:"50",
      uncompleted:"10"
    },
    {
      title:"March",
      completed:"67",
      uncompleted:"4"
    },
    {
      title:"April",
      completed:"15",
      uncompleted:"0"
    },
    {
      title:"May",
      completed:"30",
      uncompleted:"7"
    },
    {
      title:"June",
      completed:"45",
      uncompleted:'10'
    },
    {
      title:"July",
      completed:"52",
      uncompleted:'3'
    },
    {
      title:"August",
      completed:"32",
      uncompleted:"5"
    },
    {
      title:"September",
      completed:"220",
      uncompleted:"12"
    },
    {
      title:"October",
      completed:"25",
      uncompleted:"4"
    },
  ]

  const lawdata = [
    {
      field:"Criminal law",
      total:15
    },
    {
      field:"Envirmonmental law",
      total:20
    },
    {
      field:"Land law",
      total:22
    }
  ]

  const[user, setuser] =  useState([]);
  useEffect(() =>{
    const fetchdata = async() =>{
      try{
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        setuser(response.data)
      }catch(error){
        window.alert("There is an error")
      }
    };

    fetchdata();
  },[])



  const[issue, setcase] = useState([]);
  useEffect(() =>{
    const getcases = async() =>{
      try{
        const answer = await axios.get("https://jsonplaceholder.typicode.com/todos");
        const slicedata = answer.data.slice(0,10);
        setcase(slicedata)
      }catch(error){
        window.alert("There is an error")
      }
    };

    getcases();
  },[])
  return (
    <div className="w-10/12 relative bg-bodybackground h-screen lg:w-10/12 md:w-2/3 sm:w-2/3">
      <div className="relative bg-white py-5">
        <div className="flex items-center justify-center w-full px-10 gap-x-12 relative">
          <div className="flex items-center justify-start w-1/2 bg-slate-50 gap-x-1 py-3 px-2 rounded-xl">
            <CiSearch className="text-xl" />
            <input
              type="text"
              placeholder="Search"
              className="w-full outline-none bg-transparent placeholder:text-black text-sm"
            />
          </div>

          <div className="w-1/2 flex items-center justify-end gap-x-2">
            <IoIosNotificationsOutline className="text-2xl text-black" />
            <div className="flex items-center justify-center gap-x-2">
              <RiAdminLine className="text-2xl text-black" />

              <div className="relative">
                <p onClick={toggleOptions} className="cursor-pointer flex items-center justify-center text-black text-base">
                  Admin 1 <IoIosArrowDown className="text-black" />
                </p>
                {showOptions && (
                  <div className="absolute bg-white border rounded-lg py-4 px-4 top-full left-0 mt-1 z-10">
                    <a className="block my-4 w-full" href="#">Profile</a>
                    <a className="block my-4 w-full" href="#">Settings</a>
                    <Link to="/" className="block my-4 w-full">LogOut</Link>
                    {/* <a className="block my-4 w-full" href="#" >Log out</a> */}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>




      <div className="px-10 py-5">
        <h1 className="uppercase text-base font-bold">Dashboard</h1>
        <div className="flex items-start justify-between w-full gap-x-4 py-5">
        <div className="w-2/5 bg-white flex items-center justify-center p-6 gap-x-4">
          <div>
            <h3 className="text-2xl">Law made easy</h3>
            <p className="text-base mt-3">"Law and order are the medicine of the body politic and when the body politic gets sick, medicine must be administered." - B.R. Ambedkar</p>
          </div>
          <img src="/images/quoteimage.jpg" alt="quote" className="w-52" />
        </div>

        <div className="w-3/5 bg-white p-3 relative">
          <div className="flex items-center justify-between gap-x-4 relative">
            <p className="text-lg">This week's overview</p>
            <span className="flex items-center gap-x-1 text-lg relative">Sort by: <p className="flex items-center gap-x-1 relative">Current week <IoIosArrowDown onClick={toggleDays}/>
            {showDays && (
                <div className="absolute bg-white border rounded-lg py-4 px-4 top-full left-0 mt-1 z-10 w-full">
                  <p className="my-2 cursor-pointer">Today</p>
                  <p className="my-2 cursor-pointer">Weekly</p>
                  <p className="my-2 cursor-pointer">Monthly</p>
                  <p className="my-2 cursor-pointer">Yearly</p>
                </div>
              )}
            
            </p></span>          
          </div>
          <div className="">
            <div className="flex items-center gap-x-4">{handleBody}</div>
          </div>
        </div>
      </div>
      </div>


      <div className="flex items-start justify-start w-full gap-x-4 px-10">
        <div className="w-3/5 bg-white">
          <p className="uppercase text-base font-bold px-4 py-2">Cases</p>
          <div className="flex items-center justify-end gap-x-5 pr-8">
            <p className="text-base"><span className="text-piecolor text-2xl font-bold">200</span> completed</p>
            <p className="text-base"><span className="text-piecolor text-2xl font-bold">49</span> uncompleted</p>
          </div>
          <div className="mt-10">
          <BarChart
          width={850}
          height={360}
          data={bardata}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="title" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="completed" fill="#428a7a" activeBar={<Rectangle fill="black" stroke="black" />} />
          <Bar dataKey="uncompleted" fill="#b3b3b3" activeBar={<Rectangle fill="gray" stroke="gray" />} />
          </BarChart>
          </div>
        </div>


        <div className="w-2/5 mx-auto bg-white">
          <p className="uppercase text-base font-bold px-4 py-2">Lawyers</p>
          <p className="text-base text-end pr-8"><span className="text-piecolor text-2xl font-bold">250</span> Total Lawyers</p>
          <PieChart width={555} height={400}>
            <Pie
              data={lawdata}
              cx="50%"
              cy="50%"
              innerRadius={80}
              outerRadius={120}
              fill="#428a7a"
              dataKey="total"
              nameKey="field"
              label={({ cx, cy, midAngle, innerRadius, outerRadius, value, index }) => {
                const RADIAN = Math.PI / 180;
                const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
                const x = cx + radius * Math.cos(-midAngle * RADIAN);
                const y = cy + radius * Math.sin(-midAngle * RADIAN);
                const fontSize = 5;

                let labelX = cx + (outerRadius + fontSize) * Math.cos(-midAngle * RADIAN);
                let labelY = cy + (outerRadius + fontSize) * Math.sin(-midAngle * RADIAN);
              //   if (midAngle > 90 && midAngle <= 270) {
              //   labelX -= fontSize * 3;
              //   } else {
              //   labelX += fontSize; 
              // }
                return (
                  <>
                   <text x={labelX} y={labelY} fill="black" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                    {lawdata[index].field}
                  </text>

                  <text x={x} y={y} fill="#428a7a" textAnchor="middle" dominantBaseline="central">
                    {value}
                  </text>
                  </>
                 
                );
              }}
              labelLine={false}
            />
            <Tooltip />
          </PieChart>
        </div>
      </div>


      <div className="px-10 py-10 flex items-center justify-between bg-bodybackground gap-x-12">
        <div className="bg-white w-1/2 p-4 firstbox">
          <h4 className="uppercase text-base font-bold py-2">lawyers</h4>
          <table className="table-auto w-full mx-auto">
          <thead>
            <tr>
              <th className="uppercase text-start">Law ID</th>
              <th className="uppercase text-start">Name</th>
              <th className="uppercase text-start">Email</th>
            </tr>
          </thead>
          <tbody>
            {user.map((userdetails,i) =>{
              return(
                <tr key={i} className="">
                  <td className="mx-auto py-2">{userdetails.id}</td>
                  <td className="mx-auto">{userdetails.name}</td>
                  <td className="mx-auto">{userdetails.email}</td>
                </tr>
              );
            })}
          </tbody>
          </table>     
        </div>


        <div className="bg-white w-1/2 p-4 firstbox">
          <h4 className="uppercase text-base font-bold py-2">Cases</h4>
          <table className="table-auto w-full mx-auto">
            <thead>
              <tr>
                <th className="uppercase text-start">Case ID</th>
                <th className="uppercase text-center">Case Name</th>
                <th className="uppercase text-start">Status</th>
              </tr>
            </thead>
            <tbody>
              {issue.map((cases, i) =>{
                return(
                  <tr key={i}>
                    <td className="mx-auto py-2">{cases.id}</td>
                    <td className="mx-auto">{cases.title}</td>
                    <td className="mx-auto">{cases.completed ? 'Completed': 'Uncompleted'}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default Body;