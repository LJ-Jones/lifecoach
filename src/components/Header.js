import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import '../App.css';

const Header = () => {
    return (
        <Fragment>
            <div className="nav-top"></div>
            <nav className="navbar row">
                <div className="col-12 col-md-3">
                    <div className="navbar-brand">
                        <Link to="/">
                            <img src="/images/the_lifecoach_logo.png" alt="lifecoach logo" />
                        </Link>
                    </div>
                </div>

                <div className="col-12 col-md-3">
                    <ul  className="nav justify-content-end">
                        <li  className="nav-item">
                            <Link to="/"  className="nav-link active" aria-current="page" >Home</Link>
                        </li>
                        <li  className="nav-item">
                            <Link to="/about"  className="nav-link" >About</Link>
                        </li>
                        <li  className="nav-item">
                            <Link to="/services"  className="nav-link" >Services</Link>
                        </li>
                        <li  className="nav-item">
                            <Link to="Contact"  className="nav-link" >Contact</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </Fragment>
        
    )
}

export default Header
