import React from "react";
import './Policycard.css';
import { Link } from "react-router-dom";

// get props from parent component
// attributes: scheme_id title, issued_by, eligiblity, process, time

const PolicyCard = (props) => {
    // each policy will redirect to a page with more details /policydetails/:id
    return (
        <div className="policy-card">
            <div className="policy-card__content">
                <h3 className="policy-card__title">{props.title}</h3>
                <p className="policy-card__issued_by">{props.issued_by}</p>
                <p className="policy-card__time">{props.time}</p>
                <Link to={{
                    pathname: `/policydetails/${props.scheme_id}`,
                    state: { 
                        title: props.title,
                        issued_by: props.issued_by,
                        time: props.time,
                        eligiblity: props.eligiblity,
                        process: props.process,
                        scheme_id: props.scheme_id,
                        basic_description: props.basic_description,
                        link: props.link,

                    }
                }} className="policy-card__link" >
                    Read More
                </Link>
            </div>
        </div>
    );
}

export default PolicyCard;
