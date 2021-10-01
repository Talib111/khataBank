
import {FaFacebookF} from 'react-icons/fa'
import { AiOutlineGoogle} from 'react-icons/ai'
const Login = ()=>{
    return (
        <>
      <div className="login_outer">
      <div className="container login-container">
            <div className="row">
                <div className="col-md-6 login-form-1">
                    <h3>Login Form</h3>
                    <form>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Your Email *"  />
                        </div>
                        <div className="form-group mt-2">
                            <input type="password" className="form-control" placeholder="Your Password *"  />
                        </div>
                        <div className="form-group mt-3">
                            <input type="submit" className="btnSubmit shadow" value="Login" />
                        </div>
                        <div className="form-group">
                            <a href="#" className="ForgetPwd">Forget Password?</a>
                        </div>

                        <div className="social mt-3">
                          <div className="face"><div><FaFacebookF/></div></div>
                          <div className="goog"><div><AiOutlineGoogle/></div></div>
                        </div>
                    </form>
                </div>
               
            </div>
        </div>
      </div>
        </>
    )
}

export default Login