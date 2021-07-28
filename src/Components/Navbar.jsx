import React from 'react'
import LogoName from '../Assets/Uptimekeeper-white.svg';

const Navbar = () => {
    return (
        <>
            <header>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-2 dark-mode logo">
                            <img src={LogoName} alt="logo" />
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Navbar
