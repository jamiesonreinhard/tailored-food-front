import React from "react";
import { mediaArray } from "../../data/media";

const MediaGrid = () => {
  return (
    <div className="media">
      <div className="container">
        <div className="articleGrid">
          <div className="header">
            <h2 className="title">{"Media & News"}</h2>
            <p className="subtitle">{"Tailored Food has been busy working with its partners."}</p>
          </div>
          <div className="cardContainer">
            {mediaArray?.map((article, index) => (
              <a
                key={index}
                href={article.url}
                className="card"
                style={{ backgroundImage: `url(${article.image})` }}
              >
                <div className="overlay">
                  <h3 className="cardTitle">{article.title}</h3>
                  <h3 className="cardSubtitle">{article.subtitle}</h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaGrid;
