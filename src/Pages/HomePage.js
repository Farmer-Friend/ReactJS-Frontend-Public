import React from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import Gallery from "../Components/Gallery/Gallery";
import About from "../Components/About/About";
import Features from "../Components/Features/Features";

const HomePage = () => {

    return (
        <div className="homepage">
            <Header/>
            <Gallery/>
            <About/>
            <Features/>
            <Footer/>
        </div>
    )
}

export default HomePage;