import React,{useState} from 'react'
import{Link} from 'react-router-dom';
import Banner1 from "../../Assets/login-banner01.svg";
import Banner2 from "../../Assets/login-banner02.svg";
import Banner3 from "../../Assets/login-banner03.svg";
import Eye from "../../Assets/eye-close.svg";
import{setUserSession} from '../../Auth/Common';
import axios from 'axios';


const Login = (props) => {

const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [error,setError]=useState(null);
const[loading,setLoading]=useState(false);
const[show,setShow]=useState(true);


const submit=(e)=>{
     e.preventDefault();
//   console.log(email,password);
//     setEmail('');
//     setPassword('');
setError(null);
setLoading(true);
// fetch('http://14.141.28.114:3125/login',
//  { method: 'post',
//   body: JSON.stringify({
//    email:email,
//    password:password,
//  }) }).then(function(response)
//   { 
//     return response.json(); })
//   .then(function(data) 
//   {console.log(data);
//    }).catch((error)=>{
//     console.log(error);
//    });
fetch('http://14.141.28.114:3125/login', {
    method: 'POST',
    body: JSON.stringify({
      email: email,
      password: password,
    }),
    headers: { 'Content-Type': 'application/json', }
  }
  )
    .then((response) =>
    {
     console.log(response.status)
    if(response.status=== 200 || response.status===401 || response.status==422)
    //  console.log(response.status);
    {
     return response.json();
    }
   
   setError('Somthing went wrong');
    throw new Error(" something went wrong");
    
    }
      )
    .then((data)=>
    {
      
      console.log(data);
      // var v=data.json();
      // console.log(v);
      // console.log(data.token);
      // history.push('/dashboard')
      if(data.token!==undefined){
        console.log("user set",data.token);
        setUserSession(data.token);
        console.log("redirected to dasborad");

      }
      else{
        var v= data.error_payload.email||data.error_payload.password||data.error_code;
        console.log(v);
        setError(v);
      }

    })
    .catch((error)=>{
      console.log(error);
    })
// axios.get("http://14.141.28.114:3125/").then(response=>{
    
//     console.log('sucess',response);
// }).catch(error=>{
//     setLoading(false);
//     console.log(error);
//     if(error.status === 401 || error.status === 400 ){
//         setError(error.message);
//     }
//     else{
//         setError("Something went wrong. Please try again later.")
//     }
// });



  }

    return (
        <>
             <section className="loging-section">
        <div className="container-fluid">
          <div className="row justify-end">
            <div className="left-banner">
              
              <div id="carouselExampleIndicators" className="carousel slide left-banner-content" data-ride="carousel">
                <ol className="carousel-indicators">
                  <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
                  <li data-target="#carouselExampleIndicators" data-slide-to={1} />
                  <li data-target="#carouselExampleIndicators" data-slide-to={2} />
                </ol>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src={Banner1}/>
                    <div>
                      <h2> Monitoring Made Easy! </h2>
                      <p>
                        With Uptime Keeper monitor multiple projects and Applications just with few clicks.
                      </p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img src={Banner2} />
                    <div>
                      <h2> Improve your site speed! </h2>
                      <p>
                        Increase your site speed with frequent uptime and performance monitoring
                      </p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img src={Banner3} />
                    <div>
                      <h2> Modernize your apps </h2>
                      <p>
                        Modernize all your apps with speed and control
                      </p>
                    </div>
                  </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true" />
                  <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true" />
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>
            <div className="col-lg-6 login-area">
              <form>
                <h2 className="m-top-30"> Login </h2>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Email address</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={(e)=>setEmail(e.target.value)} required/>                          
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Password</label>
                  <input type={show?"password":"text"} className="form-control" id="exampleInputPassword1" value={password} onChange={(e)=>setPassword(e.target.value)} />
                  <a  href="#"> <img  className="eye" src={Eye}/> </a>
                </div>
                <div className="form-group form-check">
                  <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                  <label className="form-check-label" htmlFor="exampleCheck1"> Keep me signed in </label>
                  <Link className="forgot-password" to='/forgetpassword'> Forgot password? </Link>
                </div>
                {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
                <button type="submit" className="btn main-button" onClick={(e)=>submit(e)}><span>Submit</span></button>                        
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  
);
        </>
    )
}

export default Login

