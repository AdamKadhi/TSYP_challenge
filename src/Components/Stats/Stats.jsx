import React from "react";
import "./stats.css";
import academic from "../imgs/academic.png";
import worthlness from "../imgs/worthlness.png";
import nervous from "../imgs/nervous.png";
import hopeleness from "../imgs/hopeleness.png";
import TransitionWrapper from "../TransitionWrapper";
const Stats = () => {
  return (
    <TransitionWrapper>
      <div className="stats_section">
        <h1>Academic Score</h1>
        <div className="stats_details">
        
        <div className="stats_img">
          <img src={academic} alt="" />
        </div>
        <div className="stats_desc">
          <div>
            <h2><button style={{ backgroundColor: '#3266cc' }}></button> 7,2%</h2>
            <p>Very Good (+16)</p>
          </div>
          <div>
            <h2><button style={{ backgroundColor: '#dc3812' }}></button> 35,4%</h2>
            <p>Good (13-16)</p>
          </div>
          <div>
            <h2><button style={{ backgroundColor: '#fe9900' }}></button> 50,2%</h2>
            <p>Okay (10-13)</p>
          </div>
          <div>
            <h2><button style={{ backgroundColor: '#109619' }}></button> 7,2%</h2>
            <p>Could be better (&#10094;10)</p>
          </div>
        </div>
      </div>
      <h1>Perceived Worthlessness Frequency</h1>
        <div className="stats_details">
        
        <div className="stats_img">
          <img src={worthlness} alt="" />
        </div>
        <div className="stats_desc">
          <div>
            <h2><button style={{ backgroundColor: '#3266cc' }}></button> 20,2%</h2>
            <p>All the time</p>
          </div>
          <div>
            <h2><button style={{ backgroundColor: '#dc3812' }}></button> 36,8%</h2>
            <p>Most of the time</p>
          </div>
          <div>
            <h2><button style={{ backgroundColor: '#fe9900' }}></button> 26,5%</h2>
            <p>Some of the time</p>
          </div>
          <div>
            <h2><button style={{ backgroundColor: '#109619' }}></button> 13,9%</h2>
            <p>A little of the time</p>
          </div>
          <div>
            <h2><button style={{ backgroundColor: '#9c009e' }}></button> 2,6%</h2>
            <p>None of the time</p>
          </div>
        </div>
      </div>
      <h1>Frequency of Nervousness in the Past Month</h1>
        <div className="stats_details">
        
        <div className="stats_img">
          <img src={nervous} alt="" />
        </div>
        <div className="stats_desc">
        <div>
            <h2><button style={{ backgroundColor: '#3266cc' }}></button> 12,6%</h2>
            <p>All the time</p>
          </div>
          <div>
            <h2><button style={{ backgroundColor: '#dc3812' }}></button> 32,7%</h2>
            <p>Most of the time</p>
          </div>
          <div>
            <h2><button style={{ backgroundColor: '#fe9900' }}></button> 35,4%</h2>
            <p>Some of the time</p>
          </div>
          <div>
            <h2><button style={{ backgroundColor: '#109619' }}></button> 15,7%</h2>
            <p>A little of the time</p>
          </div>
          <div>
            <h2><button style={{ backgroundColor: '#9c009e' }}></button> 3,6%</h2>
            <p>None of the time</p>
          </div>
        </div>
      </div>
      <h1>Frequency of Hopelessness</h1>
        <div className="stats_details">
        
        <div className="stats_img">
          <img src={academic} alt="" />
        </div>
        <div className="stats_desc">
          <div>
            <h2><button style={{ backgroundColor: '#3266cc' }}></button> 9,4%</h2>
            <p>All the time</p>
          </div>
          <div>
            <h2><button style={{ backgroundColor: '#dc3812' }}></button> 16,6%</h2>
            <p>Most of the time</p>
          </div>
          <div>
            <h2><button style={{ backgroundColor: '#fe9900' }}></button> 24,2%</h2>
            <p>Some of the time</p>
          </div>
          <div>
            <h2><button style={{ backgroundColor: '#109619' }}></button> 34,1%</h2>
            <p>A little of the time</p>
          </div>
          <div>
            <h2><button style={{ backgroundColor: '#9c009e' }}></button> 15,7%</h2>
            <p>None of the time</p>
          </div>
        </div>
      </div>
      </div>
    </TransitionWrapper>
  );
};

export default Stats;
