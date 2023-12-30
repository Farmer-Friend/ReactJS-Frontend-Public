import React from "react";
import "./NewsCard.css";

// get props from parent component
// attributes: title, image,link, date, language

{/* <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="..." alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div> */}

const NewsCard = (props) => {
    return (
        <div className="news-card">
        <div className="news-card__image-container">
            <img src={props.image} alt="News Image" />
        </div>
        <div className="news-card__content">
            <h3 className="news-card__title">{props.title}</h3>
            <p className="news-card__date">{props.date}</p>
            <p className="news-card__language">{props.language}</p>
            <a href={props.link} className="news-card__link" target="_blank">
            Read More
            </a>
        </div>
        </div>
    );
};

export default NewsCard;

