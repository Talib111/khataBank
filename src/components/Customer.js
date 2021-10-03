import GaveGotModal from "./GaveGotModal"
import SidePanel from "./SidePanel"

const Customer = ()=>{

  
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
  console.log('Customer rendered')

    return(
        <>

          <div className="container w-screen sm:w-3/4 bg-gray-200 h-screen float-right px-2">
          <h1 className="text-lg font-semibold text-gray-800 px-4">Customer</h1>


          <section class="text-gray-600 body-font">
    <div class="container px-5 py-4 mx-auto">
      <div class="flex  -m-4 text-center gap-4 justify-center items-center">
        <div class="p-4 sm:w-1/4 w-1/2 bg-yellow-300 rounded-lg shadow-lg">
          <h2 class="title-font font-medium sm:text-4xl text-xl text-gray-900">💚 Mark sandy</h2>
          <p class="leading-relaxed">9123254993</p>
        </div>
        <div class="p-4 sm:w-1/4 w-1/2 bg-yellow-300 rounded-lg shadow-lg">
          <h2 class="title-font font-medium sm:text-4xl text-xl text-gray-900">💚 Net Balance</h2>
          <p class="leading-relaxed">50000 rs</p>
        </div>
       
        
      </div>
    </div>
  </section>

        {/* <!-- transcations --> */}
        <div className="flex w-full h-12 rounded  mt-12">
        <div className="w-2/4 sm:w-3/4 pl-2 flex items-center"><h1>Transcations</h1></div>
        <div className="w-2/4 sm:w-1/4 flex gap-4 py-2"><div className="flex-1"><GaveGotModal/></div>
        <div className="flex-1"><button className="w-full h-full bg-green-800 text-white rounded shadow-lg">You Got</button></div></div>
        </div>

        {/* <!-- all history --> */}
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
                    
                    arr.map((data,index)=>(
                     
                    <tr>
                       {/* <a href="/trans"> */}
                  <td className="px-4 py-3">{data.name}</td>
                  <td className="px-4 py-3">{data.date}</td>
                  <td className="px-4 py-3">{data.amount}</td>
                  <td className="px-4 py-3 text-lg text-gray-900">{data.amount}</td>
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

          {/* <!-- last details --> */}
            {/* <!-- transcations --> */}
        <div className="flex w-full h-12 rounded  mt-4">
            <div className="w-2/4 sm:w-3/4 pl-2 flex items-center"><h1>Showing 2 out of 2 results</h1></div>
            <div className="w-2/4 sm:w-1/4 flex gap-4 py-2 justify-right"><button className="bg-purple-400 w-10 h-10 text-white font-semibold float-right">1</button></div>
            </div>

    </div>

    <SidePanel/>
        </>
    )
}
export default Customer