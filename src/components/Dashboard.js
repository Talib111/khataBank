import Card from "./Card"
import '../styles/Dashboard.css'
import TableCard from "./TableCard"
import SidePanel from "./SidePanel"
import {FaSortAmountUpAlt} from 'react-icons/fa'
import {FaRegFilePdf} from 'react-icons/fa'
import {RiFilterFill} from 'react-icons/ri'
import {useState,useRef} from 'react'
import AddCustomerModal from "./AddCustomerModal"

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


        {/* <div className="flex w-full px-2  h-24 gap-2 py-2 sm:py-0 sm:gap-12 sm:px-16 mt-4">
                <div className="flex-1 bg-purple-300 rounded-lg flex overflow-hidden shadow-xl cursor-pointer">
                   <Card/>
                </div>
                <div className="flex-1 bg-purple-300 rounded-lg flex overflow-hidden shadow-xl">
                <Card/>
                   
                </div>
                <div className="flex-1 bg-purple-300 rounded-lg flex overflow-hidden shadow-xl">
                   <Card/>
                    
                </div>
                <div className="flex-1 flex-col bg-black-300 rounded-lg hidden sm:flex overflow-hidden shadow-xl gap-4 ">
                    <div className="flex-1 bg-red-200 flex justify-center items-center">Money in the bank</div>
                    <div className="flex-1 px-12 bg-yellow-300 flex justify-center items-center flex-col">Money in the bank</div>
                </div>
            </div> */}
             <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex  -m-4 text-center gap-4 justify-center items-center">
            <div className="p-4 sm:w-1/4 w-1/2 bg-yellow-300 rounded-lg">
              <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">3000 k</h2>
              <p className="leading-relaxed">Balance</p>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2 bg-yellow-300 rounded-lg">
              <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">2000 k</h2>
              <p className="leading-relaxed">Money</p>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2 bg-yellow-300 rounded-lg">
              <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">5000 k</h2>
              <p className="leading-relaxed">Status</p>
            </div>
            
          </div>
        </div>
      </section>

            <div className="w-full flex gap-4 mt-8 pl-2 pr-2 h-8"><div className="text-lg font-semibold flex-1">Customer List</div>
            <div className="flex-1"> (2 customers)</div><div className="flex-1"><AddCustomerModal/></div></div>
       
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

        {/* <div className="w-full bg-white shadow">
        {
            
            arr.map((data,index)=>(
        <TableCard key={index} name={data.name} phone={data.phone} date={data.date} amount={data.amount} />

            ))
        }
        </div> */}
         <section className="text-gray-600 body-font bg-white">
            <div className="container px-5 py-24 mx-auto">
             
              <div className="lg:w-2/3 w-full mx-auto overflow-auto">
                <table className="table-auto w-full text-left whitespace-no-wrap">
                  <thead>
                    <tr>
                      <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">Plan</th>
                      <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Speed</th>
                      <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Storage</th>
                      <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Price</th>
                      <th className="w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-4 py-3">Start</td>
                      <td className="px-4 py-3">5 Mb/s</td>
                      <td className="px-4 py-3">15 GB</td>
                      <td className="px-4 py-3 text-lg text-gray-900">Free</td>
                      <td className="w-10 text-center">
                        <input name="plan" type="radio"/>
                      </td>
                    </tr>
                    <tr>
                      <td className="border-t-2 border-gray-200 px-4 py-3">Pro</td>
                      <td className="border-t-2 border-gray-200 px-4 py-3">25 Mb/s</td>
                      <td className="border-t-2 border-gray-200 px-4 py-3">25 GB</td>
                      <td className="border-t-2 border-gray-200 px-4 py-3 text-lg text-gray-900">$24</td>
                      <td className="border-t-2 border-gray-200 w-10 text-center">
                        <input name="plan" type="radio"/>
                      </td>
                    </tr>
                    <tr>
                      <td className="border-t-2 border-gray-200 px-4 py-3">Business</td>
                      <td className="border-t-2 border-gray-200 px-4 py-3">36 Mb/s</td>
                      <td className="border-t-2 border-gray-200 px-4 py-3">40 GB</td>
                      <td className="border-t-2 border-gray-200 px-4 py-3 text-lg text-gray-900">$50</td>
                      <td className="border-t-2 border-gray-200 w-10 text-center">
                        <input name="plan" type="radio"/>
                      </td>
                    </tr>
                    <tr>
                      <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">Exclusive</td>
                      <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">48 Mb/s</td>
                      <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">120 GB</td>
                      <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-lg text-gray-900">$72</td>
                      <td className="border-t-2 border-b-2 border-gray-200 w-10 text-center">
                        <input name="plan" type="radio"/>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="flex pl-4 mt-4 lg:w-2/3 w-full mx-auto">
                <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
                <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Button</button>
              </div>
            </div>
          </section>
         </div>
            
        </>
    )
}

export default Dashboard
