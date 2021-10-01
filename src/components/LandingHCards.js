import { BsClockHistory} from 'react-icons/bs'
import { IoLogoWhatsapp} from 'react-icons/io'
import { FaFileInvoiceDollar} from 'react-icons/fa'
function LandingHCards() {
    return (
        <>
             <div className="flex flex-wrap">
            <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
              <div
                className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
              >
                <div className="px-4 py-5 flex-auto">
                  <div
                    className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400"
                  >
                    <i className="fas fa-award"><BsClockHistory/></i>
                  </div>
                  <h6 className="text-xl font-semibold">Credit History</h6>
                  <p className="mt-2 mb-4 text-gray-600">
                   Manages all the customer's history at one place with simple user interface.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-4/12 px-4 text-center">
              <div
                className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
              >
                <div className="px-4 py-5 flex-auto">
                  <div
                    className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400"
                  >
                    <i className="fas fa-retweet"><IoLogoWhatsapp /></i>
                  </div>
                  <h6 className="text-xl font-semibold">Whatsapp Support</h6>
                  <p className="mt-2 mb-4 text-gray-600">
                   Whatsapp support with auto message feature which keeps the customers engaged.
                  </p>
                </div>
              </div>
            </div>
            <div className="pt-6 w-full md:w-4/12 px-4 text-center">
              <div
                className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
              >
                <div className="px-4 py-5 flex-auto">
                  <div
                    className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400"
                  >
                    <i className="fas fa-fingerprint"><FaFileInvoiceDollar/></i>
                  </div>
                  <h6 className="text-xl font-semibold">Instant Invoice</h6>
                  <p className="mt-2 mb-4 text-gray-600">
                    Make Invoice Instantly and share with your customer very easily
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
    )
}

export default LandingHCards
