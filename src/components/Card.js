import img11 from '../media/in2.png'
const Card = (props)=>{

  console.log('Card rendered')

    
    return(
        <>
        <div className="p-4 sm:w-1/4 w-1/2 bg-yellow-300 rounded-lg shadow-lg">
              <h2 className="title-font font-medium sm:text-4xl text-2xl text-gray-900">{props.cardValue}</h2>
              <p className="leading-relaxed">{props.cardName}</p>
            </div>
        </>
    )
}

export default Card