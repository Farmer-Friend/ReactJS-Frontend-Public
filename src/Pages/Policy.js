import React from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import SearchBar from "../Components/SearchBar/SearchBar";
import PolicyCard from "../Components/Policycard/PolicyCard";

const Policy = () => {

    const [policies, setPolicies] = React.useState([]);
    const [error, setError] = React.useState(null);

    React.useEffect(() => {
        fetch("http://127.0.0.1:5000/governmentPolicies/getPolicyList")
        .then((response) => {
            if (!response.ok) {
                throw new Error("Failed to fetch policies");
            }
            return response.json();
        })
        .then((data) => setPolicies(data))
        .catch((error) => setError(error.message));
    }
    , []);

    // search in api with get request with keyword
    const handleSearch = (keyword) => {
        fetch(`http://127.0.0.1:5000/governmentPolicies/searchPolicy?keyword=${keyword}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error("");
            }
            return response.json();
        })
        .then((data) => setPolicies(data))
        .catch((error) => setError(error.message));
    }


    return (
        <>
        <Header />
        <h1 st>Policy Page</h1>
        <SearchBar onSearch={handleSearch} />
        <div className="policy-card" style={{display:"flex", flexWrap:"wrap", margin:"30px 0"}}>
            {policies.map((policy) => (
                <PolicyCard 
                    title={policy.title}
                    issued_by={policy.issued_by}
                    time={policy.time}
                    scheme_id={policy.scheme_id}
                 />
            ))                
            }
        </div>
        <Footer />
        </>
    );
    }

export default Policy;
