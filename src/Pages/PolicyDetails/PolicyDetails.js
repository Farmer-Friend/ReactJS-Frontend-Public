import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

// this component is used to display the details of a policy

// the id of the policy is in the url

const PolicyDetails = () => {

    const [policyDetails, setPolicyDetails] = React.useState({});
    const [isLoading, setIsLoading] = React.useState(true);
    const [isError, setIsError] = React.useState(false);

    // get the id of the policy from the url
    const url = window.location.href;
    const id = url.substring(url.lastIndexOf('/') + 1);

    // fetch the details of the policy from the api with parameter policyId
    // url: https://127.0.0.1:5000/governmentPolicies/getPolicyDetails get request
    // parameter: policyId

    React.useEffect(() => {
        fetch(`http://127.0.0.1:5000/governmentPolicies/getPolicyDetails?policyId=${id}`)
        .then((res) => {
            if (res.status !== 200) {
                throw new Error("Item not found");
            }
            return res.json();
        })
        .then((data) => {
            setPolicyDetails(data);
            setIsLoading(false);
        })
        .catch((err) => {
            console.log(err);
            setIsError(true);
            setIsLoading(false);
        });
    }, [id]);

    // if there is an error, display the item not found page
    if (isError) {
        return (
            <>
            <Header />
            {/* add the link back to policy page */}
            <div className="go-back">
                <a href="/policies">Go Back</a>
            </div>
            
            <div className="item-not-found">
                <h1>Item Not Found</h1>
            </div>
            <Footer />
            </>
        );
    }

    // if the data is loading, display a loading message
    if (isLoading) {
        return (
            <>
            <Header />
            <div className="loading">
                <h1>Loading...</h1>
            </div>
            <Footer />
            </>
        );
    }

    // else display the details of the policy
    return (
        <div className="policy-details">
            <Header />
            <div className="policy-details__content">
                <h1 className="policy-details__title">{policyDetails.title}</h1>
                <p className="policy-details__issued_by">{policyDetails.issued_by}</p>
                <p className="policy-details__time">{policyDetails.time}</p>
                <p className="policy-details__eligiblity">{policyDetails.eligiblity}</p>
                <p className="policy-details__process">{policyDetails.process}</p>
                <p className="policy-details__basic_description">{policyDetails.basic_description}</p>
                <a href={policyDetails.link} className="policy-details__link">Read More</a>
            </div>
            <Footer />
        </div>
    );
    
}

export default PolicyDetails;