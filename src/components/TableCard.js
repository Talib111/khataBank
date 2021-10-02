
function TableCard(props) {

  console.log('TableCard rendered')

    return (
        <>
            <div className="flex flex-row bg-white shadow mt-2 text-center h-16 sm:h-12 justify-center items-center">
                <div className="flex-1"><div >A</div></div>
                <div className="flex-1">{props.name}</div>
                <div className="flex-1">{props.date}</div>
                <div className="flex-1">{props.amount}</div>
            </div>
        </>
    )
}

export default TableCard
