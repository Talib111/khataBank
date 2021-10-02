import Card from "./Card"
import '../styles/Dashboard.css'
import TableCard from "./TableCard"
import SidePanel from "./SidePanel"
import {FaSortAmountUpAlt} from 'react-icons/fa'
import {FaRegFilePdf} from 'react-icons/fa'
import {RiFilterFill} from 'react-icons/ri'
import {useState,useRef} from 'react'

function Dashboard() {
  console.log('Dashboard rendered')


    const arr = [
        {"name":"Delia Faro","date":"3/6/2021","amount":"20152"},
    {"name":"Emlen Bainton","date":"9/10/2021","amount":"14"},
    {"name":"Johan Lethlay","date":"10/13/2020","amount":"9642"},
    {"name":"Harman Stollery","date":"8/23/2021","amount":"56334"},
    {"name":"Delila Cuddon","date":"10/4/2020","amount":"57"},
    {"name":"Shannan Children","date":"5/19/2021","amount":"8137"},
    {"name":"Halsy Deevey","date":"7/7/2021","amount":"3"},
    {"name":"Janifer Wingrove","date":"2/4/2021","amount":"34552"},
    {"name":"Eugenie Betje","date":"8/28/2021","amount":"5286"},
    {"name":"Deana Kyngdon","date":"3/6/2021","amount":"2"}
    ]
   
    
    return (
        <>
        <SidePanel/>
        <div className="rightPanel">


        <div class="flex w-full px-2  h-24 gap-2 py-2 sm:py-0 sm:gap-12 sm:px-16 mt-4">
                <div class="flex-1 bg-purple-300 rounded-lg flex overflow-hidden shadow-xl cursor-pointer">
                   <Card/>
                </div>
                <div class="flex-1 bg-purple-300 rounded-lg flex overflow-hidden shadow-xl">
                <Card/>
                   
                </div>
                <div class="flex-1 bg-purple-300 rounded-lg flex overflow-hidden shadow-xl">
                   <Card/>
                    
                </div>
                <div class="flex-1 flex-col bg-black-300 rounded-lg hidden sm:flex overflow-hidden shadow-xl gap-4 ">
                    <div class="flex-1 bg-red-200 flex justify-center items-center">Money in the bank</div>
                    <div class="flex-1 px-12 bg-yellow-300 flex justify-center items-center flex-col">Money in the bank</div>
                </div>
            </div>

            <div className="w-full flex gap-4 mt-8 pl-2 pr-2 h-8"><div className="text-lg font-semibold flex-1">Customer List</div>
            <div className="flex-1"> (2 customers)</div><div className="flex-1"><button className="w-full sm:w-2/4 h-full bg-red-800 text-white rounded shadow-lg bg-blue-600"><a href="/add">Add Customer</a></button></div></div>
       
            <div className="flex w-full h-12 rounded  mt-8 gap-4 pl-2">
        <div className="w-full sm:w-3/4  pl-2 flex items-center gap-10">
            <div className="flex-1"><input type="email" className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full" placeholder="Search" style={{"transition": "all 0.15s ease 0s"}}/></div>
            <div className="flex-1"><FaSortAmountUpAlt/></div>
      </div>
     
        </div>

        {/* <div className="container filterContainer">
            <div className="row">
                <div className="col-8"><input type="text" /></div>
                <div className="col-2"><RiFilterFill size={20}/></div>
                <div className="col-2"><FaRegFilePdf size={20}/></div>
            </div>
        </div> */}

        <div className="w-full bg-white shadow">
        {
            
            arr.map((data,index)=>(
        <TableCard key={index} name={data.name} phone={data.phone} date={data.date} amount={data.amount} />

            ))
        }
        </div>
         </div>
            
        </>
    )
}

export default Dashboard
