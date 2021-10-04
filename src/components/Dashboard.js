import Card from "./Card"
import '../styles/Dashboard.css'
import TableCard from "./TableCard"
import SidePanel from "./SidePanel"
import {FaSortAmountUpAlt} from 'react-icons/fa'
import {FaRegFilePdf} from 'react-icons/fa'
import {RiFilterFill} from 'react-icons/ri'
import {useState,useRef} from 'react'
import AddCustomerModal from "./AddCustomerModal"
import {useEffect} from 'react'
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
    const [customerDataAr, setCustomerDataAr] = useState(["hello"])
    const [userAllData, setUserAllData] = useState({"hello": "yes"})

    useEffect(() => {
      let xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {

          console.log('inside useffect ',JSON.parse(this.responseText))
          let customergotdata = JSON.parse(this.responseText)
          setCustomerDataAr(customergotdata.customerData)
          setUserAllData(customergotdata)
         
        }
      }
      xhttp.open("POST", "http://localhost:5500/data/getuser", true);
      xhttp.setRequestHeader("Content-Type", "application/json");
      xhttp.send(JSON.stringify({_id:"user3"}));
  
    }, [])
   
    
    return (
        <>
        <SidePanel/>
        <div className="rightPanel">

          <h1 className="text-lg font-semibold text-gray-800 px-4">Dashboard</h1>


         


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

        <div className="container px-5 py-4 mx-auto">
          <div className="flex  -m-4 text-center gap-4 justify-center items-center">
           <Card cardName="Balance" cardValue={userAllData.totalBalance}/>
           <Card cardName="To Give" cardValue={userAllData.totalBalance}/>
           <Card cardName="To Get" cardValue={userAllData.totalBalance}/>
           
            
            
          </div>
        </div>
      </section>

           
       
            <div className="flex w-full h-12 rounded  mt-12 gap-4 pl-2">
        <div className="w-full sm:w-3/4  pl-2 flex items-center gap-2">
            <div className="flex-1 bg-red-300"><input type="email" className="border-0 px-2 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full" placeholder="Search" style={{"transition": "all 0.15s ease 0s"}}/></div>
            <div className="flex-1"><FaSortAmountUpAlt/></div><div className="flex-1"><AddCustomerModal/></div>
      </div>
     
        </div>

        <div className="w-full flex gap-4 mt-4 pl-2 pr-2 h-8"><div className="text-lg font-semibold flex-initial px-2">Customer List</div>
            <div className="flex-initial"> (2 customers)</div></div>

    
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

                    {
                    
                        customerDataAr.map((data,index)=>(
                        <tr>
                          {/* <a href="/customer"> */}

                      <td className="px-4 py-3">{data.customerName}</td>
                      <td className="px-4 py-3">{data.customerPhone}</td>
                      <td className="px-4 py-3">{data.customerName}</td>
                      <td className="px-4 py-3 text-lg text-gray-900">{data.customerPhone}</td>
                      <td className="w-10 text-center">
                        <input name={index} type="checkbox"/>
                      </td>
                    {/* </a> */}

                    </tr>
                      ))
                     
                    }
                  
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
