import img11 from '../media/in2.png'
const Card = ()=>{

  console.log('Card rendered')

    
    return(
        <>
        <div className="shadow w-full bg-white flex" >
            <div className="w-1/4 bg-yellow-300 flex justify-center items-center broder rounded-r-2xl" >
            <img src={img11} alt="good" className="card_img_img"  />
            </div>
            <div className="w-3/4  flex flex-col justify-center items-center" >
                <h4 className="text-center pt-3 text-lg">Balance</h4>
                <h6 className="text-center">2000</h6>
            </div>
  
</div>
        </>
    )
}

export default Card