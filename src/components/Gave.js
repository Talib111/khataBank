const Gave = ()=>{

  console.log('Gave rendered')

    return(
        <div className="w-screen flex flex-col sm:w-96 p-8 mx-auto bg-white shadow-xl gap-4 mt-4">
        <div className="flex-1 text-center font-semibold">you gave rs0 to Mark</div>
        <div className="flex-1 bg-red-200 rounded"><input className="border-2 border-gray-300 w-full h-12 rounded pl-2" type="text" placeholder="Amount"/></div>
        <div className="flex-1 bg-red-200 rounded"><input className="border-2 border-gray-300 w-full h-12 rounded pl-2" type="text" placeholder="Details"/></div>
       
      
        <div className="flex-1 bg-red-200 rounded"><input className="border-2 border-gray-300 w-full h-12 rounded pl-2 cursor-pointer" type="date" placeholder="Date"/></div>
        <div className="flex-1 bg-white rounded box-border border-2 border-gray-300"><div className="h-12 flex justify-center items-center cursor-pointer">Attach Bill ➕</div></div>
        <div className="flex-1 bg-red-200 rounded"><button className="h-10 bg-green-500 text-white shadow-lg border-2 border-white w-full flex justify-center items-center">Save</button></div>
    </div>
    )
}

export default Gave