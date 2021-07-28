import React from 'react'
import Project from '../Assets/icons/projects.svg';
import {Link } from 'react-router-dom';


const Sidebar = () => {
    return (
                    

               <div className="col-lg-2 sidebar"> 
        
        <nav className="navbar nopadding">
          <div className="container-fluid nopadding">
            
            <ul className="nav navbar-nav main-list-wrapper">
              <li className="active"><a className="menu m-dashboard" href="#"> Dashboard </a></li>
              <li><a className="menu m-projects" href="#"> <img src={Project} /> Projects </a></li>
              <li className="dropdown"><a className="dropdown-toggle menu m-application" data-toggle="dropdown" href="#">  Applications </a>
                <ul className="dropdown-menu">
                  <li><Link className="nbg" to='/api'> API</Link></li>
                  <li><Link className="nbg" to='/port'> Port</Link></li>
                </ul>
              </li>              
              <li className="dropdown"><a className="dropdown-toggle menu m-monitor" data-toggle="dropdown" href="#"> Monitor </a>
                <ul className="dropdown-menu">
                  <li><a className="nbg" href="#"> URL </a></li>
                  <li><a className="nbg" href="#"> API </a></li>
                  <li><a className="nbg" href="#"> Port </a></li>
                </ul>
              </li>
              <li><a className="menu m-reports" href="#"> Reports </a></li>
              <li><a className="menu m-audit-trail" href="#"> Audit Trail </a></li>
              <li className="dropdown"><a className="dropdown-toggle menu m-user" data-toggle="dropdown" href="#"> User </a>
                <ul className="dropdown-menu">
                  <li><a className="nbg" href="#"> Manage Users </a></li>
                  <li><a className="nbg" href="#"> Manage User <br/> Roles  </a></li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>

      </div>

       
    )
}

export default Sidebar
