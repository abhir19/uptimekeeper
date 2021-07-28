
import './App.css';
import { Dashborad } from './Pages/Dashborad';
import '../src/Styles/style.css';
import '../src/Styles/dashboard.css';
import Navbar from './Components/Navbar';
import {Links,Route,Switch} from 'react-router-dom';
import Api from './Pages/Api';
import Port from './Pages/Port';
import Login from './Pages/Login/Login';
import Passwordvalidation from './Pages/Login/Passwordvalidation';
import Forgetpassword from './Pages/Login/Forgetpassword';





function App() {
  return (
    <div >
    
      <Switch>
        
      <Route path='/' exact component={Login}/>
      <Route path='/forgetpassword' exact component={Forgetpassword}/>
       <Route path='/dashboard' exact component={Dashborad}/>
       <Route path='/api' exact component={Api}/>
       <Route path='/port' exact component={Port}/>
       
       
       </Switch>
  
   {/* <Dashborad/> */}
  
    </div>
  );
}

export default App;
