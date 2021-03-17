import React, { Fragment } from 'react'

const Techniques = () => {
    return (
        <Fragment>
            <div className="row wrapper techniques">
                <div className="col-12 py-10">
                    <p className="techniques-h4">
                        My techniques follow three principles:
                    </p>
                    <p className="techniques">
                        • Clarity regarding what you are going to achieve and what the obstacles are in your path.
                    </p>
                    <p className="technique">
                        • Planned strategy based on what you want to achieve and step by step actions you are going to take .
                    </p>
                    <p className="technique">
                        • Endless support when you feel like giving up.
                    </p>
                </div>
                <Fragment>
                    <div className="row wrapper">
                        <div className="col-lg-4 col-sm-12 py-10">
                            <img src="/images/yeshi_kangrang_unsplash.png" alt="yeshi kangrang unsplash"/>
                        </div>
                        <div className="col-lg-4 col-sm-12 py-10">
                            <img src="/images/jess_bailey_unsplash.png" alt="jess bailey unsplash"/>
                        </div>
                        <div className="col-lg-4 col-sm-12 py-10">
                            <img src="/images/priscilla_du_preeze_unsplash.png" alt="priscilla du preez unsplash"/>
                        </div>
                    </div>
                </Fragment>
                
            </div>
            
        </Fragment>
    )
}

export default Techniques
