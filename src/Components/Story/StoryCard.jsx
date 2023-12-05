import React from "react";
import pdp from "../imgs/pdp.webp";
const StoryCard = () => {
  return (
    <div className="story_card">
      <div className="card_top">
        <div className="info">
          <img src={pdp} alt="" />
          <div>
            <h3>Adam Kadhi</h3>
            <p>adamkadhi345@gmail.com</p>
          </div>
        </div>
        <span>Doctor</span>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi deserunt
        ullam a atque dolorum porro corporis consequatur, maiores, explicabo
        tempora voluptatem quo. Qui aliquid laboriosam fugit necessitatibus
        maiores cum labore?
      </p>
      <div>
      <i className="fa-solid fa-thumbs-up"></i>
      <i className="fa-solid fa-envelope"></i>
      <i className="fa-solid fa-heart"></i>
      </div>
    </div>
  );
};

export default StoryCard;
