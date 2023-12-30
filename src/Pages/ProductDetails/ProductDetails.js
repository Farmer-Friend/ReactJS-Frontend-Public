import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import './ProductDetails.css';
import { Link } from 'react-router-dom';

const ProductDetails = () => {
    const [product, setProduct] = React.useState({});
    const [isLoading, setIsLoading] = React.useState(true);
    const [isError, setIsError] = React.useState(false);

    const url = window.location.href;
    const productID = url.substring(url.lastIndexOf('/') + 1);

    React.useEffect(() => {
        fetch("http://127.0.0.1:5000/marketPlace/getProductDetails?productID=" + productID)
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                throw response;
            })
            .then((data) => {
                setProduct(data);
                setIsLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setIsError(true);
                setIsLoading(false);
            });
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return (
            <>
                <Header />
                <div>
                    {/* go back to product page */}
                    <Link to="/marketplace">Go Back</Link>
                    <h2>Something went wrong...</h2>

                </div>
                <Footer />
            </>
        )
    }

    return (
        <div>
            <Header />
            <div className="container">
                <div className="row">
                    <div className="image-product">
                        <img src={product.image_url} alt={product.name} />
                    </div>
                    <div className="details-product">
                        <h1>{product.name}</h1>
                        <div className="product-info">
                            <p>Category: {product.categoryID}</p>
                            <p>Price: {product.pricePerUnit} per {product.unitOfMeasurement}</p>
                            <p>Available Units: {product.availableUnits}</p>
                            <p>Contact Info: {product.contactInfo}</p>
                            <p>Description: {product.basicDescription}</p>
                            <p>Created At: {product.createdAt}</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default ProductDetails;