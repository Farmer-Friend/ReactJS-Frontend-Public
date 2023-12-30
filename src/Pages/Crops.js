import React from "react";
import { Link } from "react-router-dom";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import SearchBar from "../Components/SearchBar/SearchBar";

const Crops = () => {

    const [crops, setCrops] = React.useState([]);
    const [error, setError] = React.useState(null);

    React.useEffect(() => {
        fetch("http://127.0.0.1:5000/crops/getCropsList")
        .then((response) => {
            if (!response.ok) {
                throw new Error("Failed to fetch crops");
            }
            return response.json();
        })
        .then((data) => setCrops(data))
        .catch((error) => setError(error.message));
    }
    , []);

    // search in api with get request with keyword
    const handleSearch = (keyword) => {
        fetch(`http://127.0.0.1:5000/crops/searchCrops?keyword=${keyword}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error("");
            }
            return response.json();
        })
        .then((data) => setCrops(data))
        .catch((error) => setError(error.message));
    }

    return (
        <>
        <Header/>
        <h1 style={{margin:"10px 0 20px 0"}}>Crops Page</h1>
        <SearchBar onSearch={handleSearch}/>
        <Footer/>
        </>
    )
}

export default Crops;
