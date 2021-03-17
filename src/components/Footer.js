import React, { Fragment } from 'react'
//import { Link } from 'react-router-dom'

import '../App.css';

const Footer = () => {
    return (
        <Fragment>
            <footer className="pt-4">
                <div className="row">
                    <div className="col-9">
                        <p className="text-left ml-10 footer-text"><strong>The Life Coach.</strong> In a town Street, UK.</p>
                        <p className="text-left ml-10 footer-text"><b>Email:</b> thelifecoach@coaching.co.uk</p>
                    </div>
                    <div className="col-1 float-left">
                        <i className="fa fa-facebook-square fa-3x"></i>
                    </div>
                    <div className="col-0.5 float-left">
                        <i className="fa fa-twitter-square fa-3x"></i>
                    </div>

                    <div className="col-1 float-left pr-10">
                        <i className="fa fa-instagram fa-3x"></i>
                    </div>
                </div>
                
                    
            </footer>
        </Fragment>
    )
}

export default Footer
