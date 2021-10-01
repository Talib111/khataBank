
function EachTran() {
    return (
        
<div className="w-screen flex flex-col sm:w-96 p-8 mx-auto bg-white shadow-xl gap-4 mt-4">
    <div className="flex-1 text-center font-semibold">Transaction Details</div>
    <div className="flex-1 flex flex-row"><div className="flex-1 h-16 flex flex-col"><div className="flex-1">Mark gave</div><div className="flex-1 font-semibold text-xl">2000rs</div></div>
    <div className="flex-1 text-right pr-4 h-16 flex flex-col"><div className="flex-1">Date</div><div className="flex-1 text-xl">20/09/21</div></div></div>
    <hr/>
    <div className="flex-1 flex flex-col"><div className="flex-1">Note</div><div className="flex-1 text-xl">Bucket</div></div>
    <hr/>
    <div className="flex-1 flex flex-col"><div className="flex-1">Balance</div><div className="flex-1 ftext-xl">2000rs</div></div>
    <hr/>
   
    <div className="flex-1  rounded flex flex-row gap-4 py-4"><div className="flex-1 h-16"><button className="flex-1 border-2 border-red-300  rounded-lg w-full h-full">Delete</button></div>
    <div className="flex-1 text-right pr-4 h-16"><button className="border-2 border-green-500 flex-1 rounded-lg w-full h-full">Edit</button></div></div>
  
   
</div>
    )
}

export default EachTran
