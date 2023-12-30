import React from "react";
import "./CropCard.css";

// 

const CropCard = props => {
    return (
        <div className="crop-card">
            <h3>{props.cropName}</h3>
            <p>{props.cropDescription}</p>
            <p>{props.cropPrice}</p>
            <p>{props.cropQuantity}</p>
            <p>{props.cropLocation}</p>
            <p>{props.cropSeller}</p>
        </div>
    )
}

export default CropCard;