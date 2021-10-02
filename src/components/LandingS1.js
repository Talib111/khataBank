import {FcAlarmClock} from 'react-icons/fc'
import s1 from '../assets/img/s1.webp'
function LandingS1() {
  console.log('LandingS1 rendered')

    return (
        <>
             <div className="flex flex-wrap items-center mt-32">
            <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
              <div
                className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100"
              >
                <i className="fas fa-user-friends text-xl"><FcAlarmClock/></i>
              </div>
              <h3 className="text-3xl mb-2 font-semibold leading-normal">
               Automatic Payment Reminder
              </h3>
              <p
                className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700"
              >
                Khatabank automatic payment remider helps you to connect with the customer and get back your money very fast
              </p>
              <p
                className="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700"
              >
                Khatabank comes with the handly tools like invoice generator to create invoice and share over whatsapp which ease your payment process.
              </p>
              <a
                href="https://www.creative-tim.com/learning-lab/tailwind-starter-kit#/presentation"
                className="font-bold text-gray-800 mt-8"
                >Sinpu now for more details!</a
              >
            </div>
            <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
              <div
                className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-pink-600"
              >
                <img
                  alt="..."
                  src={s1}
                  className="w-full align-middle rounded-t-lg"
                />
                <blockquote className="relative p-8 mb-4">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    className="absolute left-0 w-full block"
                    style={{"height": "95px", "top": "-94px"}}
                  >
                    <polygon
                      points="-30,95 583,95 583,65"
                      className="text-pink-600 fill-current"
                    ></polygon>
                  </svg>
                  <h4 className="text-xl font-bold text-white">
                    Top Notch Services
                  </h4>
                  <p className="text-md font-light mt-2 text-white">
                    The Arctic Ocean freezes every winter and much of the
                    sea-ice then thaws every summer, and that process will
                    continue whatever happens.
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </>
    )
}

export default LandingS1
