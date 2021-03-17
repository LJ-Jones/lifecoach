import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
    return (
        <Fragment>
            <div className="row wrapper">
                <div className="col-12 py-10 ml-10">
                    <p className="contact">Failure is not an option, so I have a plan to avoid this outcome.</p>
                    <div>
                        <img src="/images/lines.png" alt="lines"/>
                    </div>
                    <br />
                </div>
            </div>
            <div className="row wrapper">
                <div className="col-lg-2 col-sm-6">
                    <img src="/images/business_goal.png" alt="Business Goal" />
                </div>
                <div className="col-lg-2 col-sm-6">
                    <img src="/images/career_change.png" alt="Career Change"/>
                </div>
                <div className="col-lg-2 col-sm-6">
                    <img src="/images/relationships.png" alt="Relationships"/>
                </div>
                <div className="col-lg-2 col-sm-6">
                    <img src="/images/family_issues.png" alt="Family Issues"/>
                </div>
                <div className="col-lg-2 col-sm-6">
                    <img src="/images/personal_challenges.png" alt="Personal Challenges"/>
                </div>
            </div>
            <div className="row wrapper">
                <div className="col-12 py-10 ml-10">
                    <p className="contact">Contact me for a complimentary, no-obligation introduction to my services.</p>
                    <div>
                        <img src="/images/lines.png" alt="lines"/>
                    </div>
                    <br />
                </div>
            </div>
            <div className="row wrapper"><Link to="" className="getintouch">Get in touch</Link></div>
        </Fragment>
        
    )
}

export default Contact
