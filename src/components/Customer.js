const Customer = ()=>{
    return(
        <>
          <div className="container w-screen sm:w-3/4 bg-gray-200 h-screen float-right px-2">
        <div className="flex w-full bg-yellow-300 h-28 rounded shadow mt-4">
            <div className="rounded w-3/4 bg-white flex flex-row gap-2 py-2 justify-center items-center">
                <div className="w-2/4 flex flex-row">
                    <div className="flex-initial w-20 flex justify-center items-center sm:pl-4">
                        <div className="rounded-full bg-red-100 w-16 h-16 flex justify-center items-center border-2 border-yellow-300">A</div>
                    </div>
                    <div className="flex-initial flex flex-col pl-0 sm:pl-8 py-2">
                        <div className="flex-1">Mark</div>
                        <div className="flex-1">9122254993</div>
                        <div className="flex-1">Ranchi</div>
                    </div>
                </div>
                <div className="w-24 h-20 bg-yellow-300 justify-center items-center rounded-2xl sm:flex hidden">Reminder</div>
                <div className="w-24 h-20 bg-yellow-300 justify-center items-center rounded-2xl sm:flex hidden">Sms</div>
                <div className="w-24 h-20 bg-yellow-300 justify-center items-center rounded-2xl sm:flex hidden">Report</div>
            </div>
            <div className="w-1/4 flex flex-col justify-center items-center box-content p-4 sm:p-0">
                <h1 className="text-center">Net Balance</h1>
                <h3 className="text-center">You will get</h3>
                <h2 className="text-center">1000</h2>
            </div>
        </div>

        {/* <!-- transcations --> */}
        <div className="flex w-full h-12 rounded  mt-4">
        <div className="w-2/4 sm:w-3/4 pl-2 flex items-center"><h1>Transcations</h1></div>
        <div className="w-2/4 sm:w-1/4 flex gap-4 py-2"><div className="flex-1"><button className="w-full h-full bg-red-800 text-white rounded shadow-lg">You gave</button></div>
        <div className="flex-1"><button className="w-full h-full bg-green-800 text-white rounded shadow-lg">You Got</button></div></div>
        </div>

        {/* <!-- all history --> */}
        <table className="table-auto w-full bg-white shadow-lg rounded mt-8 text-left">
            <thead>
              <tr className=" h-12">
                <th>Date</th>
                <th>Details</th>
                <th>Attach</th>
                <th>You Gave</th>
                <th>You Got</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-2 border-gray-200 h-12 px-2">
                <td>Intro to CSS</td>
                <td>Adam</td>
                <td>858</td>
                <td>858</td>
                <td>858</td>
              </tr>
              <tr className="border-2 border-gray-200 h-12 px-2">
                <td>A Long and Winding </td>
                <td>Adam</td>
                <td>112</td>
                <td>112</td>
              </tr>
              <tr className="border-2 border-gray-200 h-12 px-2">
                <td>Intro to JavaScript</td>
                <td>Chris</td>
                <td>1,280</td>
                <td>1,280</td>
              </tr>
            </tbody>
          </table>

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