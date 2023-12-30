import React from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import SearchBar from "../Components/SearchBar/SearchBar";
import NewsCard from "../Components/NewsCard/NewsCard";

const News = () => {
    const [news, setNews] = React.useState([]);
    const [error, setError] = React.useState(null);

    React.useEffect(() => {
        fetch("http://127.0.0.1:5000/news/getNewsList")
        .then((response) => {
            if (!response.ok) {
                throw new Error("Failed to fetch news");
            }
            return response.json();
        })
        .then((data) => setNews(data))
        .catch((error) => setError(error.message));
    }, []);

    // search in api with get request with keyword
    const handleSearch = (keyword) => {
        fetch(`http://127.0.0.1:5000/news/searchNews?keyword=${keyword}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error("");
            }
            return response.json();
        })
        .then((data) => setNews(data))
        .catch((error) => setError(error.message));
    }

    return (
        <>
        <Header/>
        <h1 style={{margin:"10px 0 20px 0"}}>News Page</h1>
        <SearchBar onSearch={handleSearch}/>
        {error && <p>Error: {error}</p>}
        <div className="news-container" style={{ display: "flex", flexWrap: "wrap", margin:"30px 0" }}>
            {news.map((news) => (
                <NewsCard
                title={news.title}
                image={news.picture}
                link={news.link}
                date={news.date}
                language={news.language}
                />
            ))}
        </div>
        <Footer/>
        </>
    )
}

export default News;