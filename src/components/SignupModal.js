import React from 'react';
import github from '../assets/img/github.svg'
import google from '../assets/img/google.svg'
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '0'
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

function SignupModal() {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

 

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button onClick={openModal} className="w-32 h-10 bg-blue-600">Login Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal" 
      >
        <div className="w-full lg:w-4/12 sm:px-4 mx-auto">
              <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0">
                <div className="rounded-t mb-0 px-6 py-6">
                  <div className="text-center mb-3">
                    <h6 className="text-gray-600 text-sm font-bold">
                      Sign in with
                    </h6>
                  </div>
                  <div className="btn-wrapper text-center">
                    <button className="bg-white active:bg-gray-100 text-gray-800 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs" type="button" style={{"transition": "all 0.15s ease 0s"}}>
                      <img alt="..." className="w-5 mr-1" src={github}/>Github</button><button className="bg-white active:bg-gray-100 text-gray-800 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs" type="button" style={{"transition": "all 0.15s ease 0s"}}>
                      <img alt="..." className="w-5 mr-1" src={google}/>Google
                    </button>
                  </div>
                  <hr className="mt-6 border-b-1 border-gray-400"/>
                </div>
                <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                  <div className="text-gray-500 text-center mb-3 font-bold">
                    <small>Or sign in with credentials</small>
                  </div>
                  <form>
                    <div className="relative w-full mb-3">
                      <label className="block uppercase text-gray-700 text-xs font-bold mb-2" for="grid-password">Email</label><input type="email" className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full" placeholder="Email" style={{"transition": "all 0.15s ease 0s"}}/>
                    </div>
                    <div className="relative w-full mb-3">
                      <label className="block uppercase text-gray-700 text-xs font-bold mb-2" for="grid-password">Password</label><input type="password" className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full" placeholder="Password" style={{"transition": "all 0.15s ease 0s"}}/>
                    </div>
                    <div>
                      <label className="inline-flex items-center cursor-pointer"><input id="customCheckLogin" type="checkbox" className="form-checkbox border-0 rounded text-gray-800 ml-1 w-5 h-5" style={{"transition": "all 0.15s ease 0s"}}/><span className="ml-2 text-sm font-semibold text-gray-700">Remember me</span></label>
                    </div>
                    <div className="text-center mt-6">
                      <button className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full" type="button" style={{"transition": "all 0.15s ease 0s"}}>
                        Sign In
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="flex flex-wrap mt-6">
                <div className="w-1/2">
                  <a href="#pablo" className="text-gray-300"><small>Forgot password?</small></a>
                </div>
                <div className="w-1/2 text-right">
                  <a href="#pablo" className="text-gray-300"><small>Create new account</small></a>
                </div>
              </div>
            </div>
      </Modal>
    </div>
  );
}

// ReactDOM.render(<App />, appElement);

export default SignupModal