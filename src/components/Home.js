import React from 'react'
import Cities from './homepage/Cities'
import Footer from './homepage/Footer'
import Glasscontainer from './homepage/Glasscontainer'
import Glasstwo from './homepage/Glasstwo'
import Herobg from './homepage/Herobg'
import "../components/Home.css"

function Home() {
    return (
        <div>
            <Herobg />
            <Glasscontainer />
            <Cities />
            <Glasstwo />
            <Footer />
        </div>
    )
}

export default Home
