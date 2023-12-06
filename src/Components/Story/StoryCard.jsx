import React from "react";
import pdp from "../imgs/pdp.webp";
const StoryCard = ({el}) => {
  return (
    <div className="story_card">
      <div className="card_top">
        <div className="info">
          <img src={el.pdp} alt="" />
          <div>
            <h3>{el.name}</h3>
            <p>{el.job}</p>
          </div>
        </div>
        
      </div>
      <p>
        {el.description}
      </p>
    </div>
  );
};

export default StoryCard;
