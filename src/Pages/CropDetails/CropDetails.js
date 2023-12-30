import React from "react";
import { Link } from "react-router-dom";

import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

const CropDetails = () => {

    return (
        <div className="cropDetails">
            <Header/>
            <h1>Crop Details Page</h1>
            <Footer/>
        </div>
    )
}

export default CropDetails;