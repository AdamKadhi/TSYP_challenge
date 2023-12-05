import React from "react";
import "./usefulR.css";
import mentalhealth from "../imgs/mentalhealth.jpg";
const UsefulR = () => {
  return (
    <div className="usefulR">
      <div className="articles">
        <h1>Useful Ressources</h1>
        <div className="article">
          <div className="article_img">
            <img src={mentalhealth} alt="" />
          </div>
          <div className="article_desc">
            <h2>A Guided Practice For Your Mental Health</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Exercitationem, autem. Voluptatibus aperiam veniam ratione
              ducimus, veritatis quisquam illo optio suscipit expedita cum.
              Minima deserunt iste totam incidunt? Odit, aliquam officia!
            </p>
            <div>
              <span>ED HALLIWELL</span>
              <span>|</span>
              <span>NOVEMBER 17,2023</span>
            </div>
          </div>
        </div>
        <div className="article">
          <div className="article_img">
            <img src="https://live-production.wcms.abc-cdn.net.au/5d4f1a93591a94c9c9349c0379fe8495?impolicy=wcms_crop_resize&cropH=1058&cropW=1880&xPos=0&yPos=98&width=862&height=485" alt="" />
          </div>
          <div className="article_desc">
            <h2>A Guided Practice For Your Mental Health</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum
              fugiat, hic, aut animi aperiam rem sapiente delectus voluptatem.
            </p>
            <div>
              <span>ED HALLIWELL</span>
              <span>|</span>
              <span>NOVEMBER 17,2023</span>
            </div>
          </div>
        </div>
      </div>
      <div className="popular_articles">
        <h2>Popular <span></span></h2>
        <div className="pop_article">
            <img src={mentalhealth} alt="" />
            <h4>A Guided Practice For Your Mental Health</h4>
        </div>
        <div className="pop_article">
            <img src={mentalhealth} alt="" />
            <h4>A Guided Practice For Your Mental Health</h4>
        </div>
        <div className="pop_article">
            <img src={mentalhealth} alt="" />
            <h4>A Guided Practice For Your Mental Health</h4>
        </div>
      </div>
    </div>
  );
};

export default UsefulR;
