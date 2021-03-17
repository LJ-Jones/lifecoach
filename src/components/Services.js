import React, { Fragment } from 'react'

const Services = () => {
    return (
        <Fragment>
            <div className="row wrapper">
                <div className="services">
                    <p className="services-h2">Is life a disappointment, or even just okay, but not enough?</p>
                    <p className="services-h3">Well, it doesn’t have to be like this!</p>
                  
                    <div className="col-12">
                        <img src="/images/lines.png" alt="lines"/>
                    </div>
                    <div className="row wrapper"> 
                        <div className="col-lg-3 col-sm-6">
                            <img src="/images/change_career_1.png" alt="change career"/>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <img src="/images/what_you_want_2.png" alt="what you want"/>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <img src="/images/not_happy_3.png" alt="not happy"/>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <img src="/images/tried_and_failed_4.png" alt="tried and failed"/>
                        </div>
                    </div>
                    <div className="services">
                        <p className="services">It doesn’t have to be like this; there is always a path that will take you to the place you you want to go and can help you change your life. </p>
                    </div>
                    <div className="services-h2">
                        <p className="services-h2">I can help!</p>
                    </div>
                    <div>
                        <p className="services">What if I show you a way to find your own path to a new you?</p>
                    </div>
                    <div className="col-12">
                        <img src="/images/lines.png" alt="lines"/>
                    </div>
                </div>
            </div>
            
        </Fragment>
    )
}

export default Services
