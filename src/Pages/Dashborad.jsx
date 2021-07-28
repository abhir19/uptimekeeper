import React from 'react'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'


export const Dashborad = () => {
    return (
        <>
             <Navbar/>
             <section className="top-60 dashboard-wrapper">
  <div className="container-fluid">
    <div className="row">
           <Sidebar/>
         
           <div className="col-lg-10">
               here Dashboard
         </div>
     </div>
     </div>
     </section>
     </>
        
    )
}
