
function LandingForm() {

  console.log('LadningForm rendered')

    return (
        <>
          <section className="pb-20 relative block bg-gray-900">
        <div
          className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
          style={{"height": "80px"}}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-gray-900 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
          <div className="flex flex-wrap text-center justify-center">
            <div className="w-full lg:w-6/12 px-4">
              <h2 className="text-4xl font-semibold text-white">Want to Start a Business ?</h2>
              <p className="text-lg leading-relaxed mt-4 mb-4 text-gray-500">
                If you want to start a business then connect with us to give a rapid boost in your business.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap mt-12 justify-center">
            <div className="w-full lg:w-3/12 px-4 text-center">
              <div
                className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center"
              >
                <i className="fa fa-medal text-xl"></i>
              </div>
              <h6 className="text-xl mt-5 font-semibold text-white">
                Excelent Services
              </h6>
              <p className="mt-2 mb-4 text-gray-500">
                We provide excellent service to grow your business very fast
              </p>
            </div>
            <div className="w-full lg:w-3/12 px-4 text-center">
              <div
                className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center"
              >
                <i className="fas fa-poll text-xl"></i>
              </div>
              <h5 className="text-xl mt-5 font-semibold text-white">
                Grow your market
              </h5>
              <p className="mt-2 mb-4 text-gray-500">
                Full of pre-tested tools to grow your presence in market
              </p>
            </div>
            <div className="w-full lg:w-3/12 px-4 text-center">
              <div
                className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center"
              >
                <i className="fas fa-lightbulb text-xl"></i>
              </div>
              <h5 className="text-xl mt-5 font-semibold text-white">24x7 Support</h5>
              <p className="mt-2 mb-4 text-gray-500">
               We have a great team to support our customers who are active all time time to fix your problem.
              </p>
            </div>
          </div>
        </div>
      </section>
            
        </>
    )
}

export default LandingForm
