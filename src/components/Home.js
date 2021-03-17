import React from 'react'

import TopPanel from './TopPanel'
import Services from './Services'
import About from './About'
import Journey from './Journey'
import Contact from './Contact'
import Techniques from './Techniques'

const Home = () => {
    return (
        <div>
            <TopPanel />
            <Services />
            <About />
            <Journey />
            <Techniques />
            <Contact />
        </div>
    )
}

export default Home
