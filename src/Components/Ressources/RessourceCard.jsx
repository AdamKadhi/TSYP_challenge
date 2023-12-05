import React from "react";

const RessourceCard = ({el}) => {
  return (
    <div className="article">
      <div className="article_img">
        <img
          src={el.poster}
          alt=""
        />
      </div>
      <div className="article_desc">
        <h2>{el.title}</h2>
        <p>
          {el.description}
        </p>
        <div>
          <a target="_blank" href={el.link}>View More</a>
        </div>
      </div>
    </div>
  );
};

export default RessourceCard;
