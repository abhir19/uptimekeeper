import React from 'react'
import Banner4 from "../../Assets/login-banner04.svg";
import Back from "../../Assets/back.svg";
import{Link} from 'react-router-dom'
import Eye from "../../Assets/eye-close.svg";

const Forgetpassword = () => {
    return (
        <div>
               <section className="loging-section">
        <div className="container-fluid">
          <div className="row justify-end">
            <Link className="back" to="/"> <img src={Back} /> </Link>
            <div className="left-banner">
              <div className="left-banner-content">                        
                <img src={Banner4} />
              </div>
            </div>
            <div className="col-lg-6 login-area">
              <form>
                <h2 className="m-top-30"> Forgot Password </h2>
                <p>
                  Enter your Email ID, we will send an email to reset password 
                </p>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Email address</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />                          
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Password</label>
                  <input type="password" className="form-control" id="exampleInputPassword1" />
                <a href="#"> <img className="eye" src={Eye} /> </a>
                </div>
                <div className="form-group form-check">
                  <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                  <label className="form-check-label" htmlFor="exampleCheck1"> Keep me signed in </label>
                  <a className="forgot-password" href="#"> Forgot password? </a>
                </div>
                <button type="submit" className="btn main-button">Submit</button>
                <p className="submission-msg"> We have sent you a mail to reset your password. </p>
              </form>
            </div>
          </div>
        </div>
      </section>
        </div>
    )
}

export default Forgetpassword
