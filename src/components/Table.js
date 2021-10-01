
function Table() {

  
    return (
        <>

    <table className="shadow">
        <thead><tr><td>Name</td>
        <td>Phone</td>
        <td>Data</td>
        <td>Amount</td></tr></thead>
        
{
     arr.map((data)=>(
        <tr className="custom_row shadow">
        <td>{data.name}</td>
        <td>{data.phone}</td>
        <td>{data.date}</td>
        <td>{data.amount}</td>
        </tr>
   
))
}
       
    </table>
   

            
        </>
    )
}

export default Table
