import React, { Fragment } from 'react'

const About = () => {
    return (
        <Fragment>
            <div className="row about-wrapper about">
                <div className="about col-lg-7 col-sm-12 pr-20">
                    <p className="text-left about-h4">Hello</p>
                    <p className="text-left about">I am a Life Coach with 20 years’ experience.  I have helped hundreds of people find their way to reach their goals, rebuild their lives, and mend their relationships.</p> 
                    <p className="text-left about">I have had my challenges too, arriving in London with only £5 over 30 years ago and had to find my way through life, dealing with lots of personal setbacks and failures. However, through learning from my mistakes and with the right support, I overcame even the most negative experiences. Now I am a successful author and a well-established practitioner. I also teach psychology at Kingston University, and I work as a consultant with many organisations, hospitals, and community centres. </p>

                </div>
                <div className="col-lg-5 col-sm-12">
                    <img className="about-image" src="/images/matheus_ferrero_unsplash.png" alt="matheus ferrero unsplash"/>
                </div>

            </div>
            
        </Fragment>
    )
}

export default About
