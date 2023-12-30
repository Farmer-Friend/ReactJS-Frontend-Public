import react from 'react';
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import SearchBar from "../Components/SearchBar/SearchBar";
import ProductCard from "../Components/ProductCard/ProductCard";

const MarketPlace = () => {

    const [marketPlace, setMarketPlace] = react.useState({});
    const [isLoading, setIsLoading] = react.useState(true);
    const [isError, setIsError] = react.useState(false);

    react.useEffect(() => {
        fetch("http://127.0.0.1:5000/marketPlace/getTrendingProducts")
        .then((response) => {
            if (response.ok) {
                return response.json();
            }
            throw response;
        })
        .then((data) => {
            setMarketPlace(data);
            setIsLoading(false);
        })
        .catch((err) => {
            console.log(err);
            setIsError(true);
            setIsLoading(false);
        });
    }, []);

    
    const handleSearch = (event) => {
        event.preventDefault();
        const searchQuery = event.target.search.value;
        console.log(searchQuery);
        fetch("http://127.0.0.1:5000/marketPlace/searchProducts?keyword=" + searchQuery)
        .then((response) => {
            if (response.ok) {
                return response.json();
            }
            throw response;
        })
        .then((data) => {
            setMarketPlace(data);
            setIsLoading(false);
        })
        .catch((err) => {
            console.log(err);
            setIsError(true);
            setIsLoading(false);
        });
    }
    if (isLoading || isError) {
        return(
            <>
            <Header/>
            <h1>MarketPlace Page</h1>
            {/* <h3>Products Not Found</h3> */}
            <SearchBar onSearch={handleSearch}/>
            <Footer/>
            </>
        )
    }


    return (
        <div>
            <Header/>
            <h1>MarketPlace Page</h1>
            <SearchBar onSearch={handleSearch}/>
            <div className="product-card-container" style={{display:"flex", flexWrap:"wrap"}}>
                {marketPlace.map((product) => (
                    <ProductCard product={product} key={product.productID}/>
                ))}
            </div>
            <Footer/>
        </div>
    )
}


export default MarketPlace;