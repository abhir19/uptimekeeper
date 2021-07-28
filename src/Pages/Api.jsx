import React from 'react'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'

const Api = () => {
    return (
        <>
        <Navbar/>
        <section className="top-60 dashboard-wrapper">
<div className="container-fluid">
<div className="row">
      <Sidebar/>
    
      <div className="col-lg-10">
          here api
    </div>
</div>
</div>
</section>
</>
    )
}

export default Api
