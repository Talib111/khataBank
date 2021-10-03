import GaveGotModal from "./GaveGotModal"

const Customer = ()=>{
  console.log('Customer rendered')

    return(
        <>
          <div className="container w-screen sm:w-3/4 bg-gray-200 h-screen float-right px-2">
          <section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex  -m-4 text-center gap-4 justify-center items-center">
        <div class="p-4 sm:w-1/4 w-1/2 bg-yellow-300 rounded-lg">
          <h2 class="title-font font-medium sm:text-4xl text-xl text-gray-900">💚 Mark sandy</h2>
          <p class="leading-relaxed">9123254993</p>
        </div>
        <div class="p-4 sm:w-1/4 w-1/2 bg-yellow-300 rounded-lg">
          <h2 class="title-font font-medium sm:text-4xl text-xl text-gray-900">💚 Net Balance</h2>
          <p class="leading-relaxed">50000 rs</p>
        </div>
       
        
      </div>
    </div>
  </section>

        {/* <!-- transcations --> */}
        <div className="flex w-full h-12 rounded  mt-4">
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

          {/* <!-- last details --> */}
            {/* <!-- transcations --> */}
        <div className="flex w-full h-12 rounded  mt-4">
            <div className="w-2/4 sm:w-3/4 pl-2 flex items-center"><h1>Showing 2 out of 2 results</h1></div>
            <div className="w-2/4 sm:w-1/4 flex gap-4 py-2 justify-right"><button className="bg-purple-400 w-10 h-10 text-white font-semibold float-right">1</button></div>
            </div>

    </div>
        </>
    )
}
export default Customer