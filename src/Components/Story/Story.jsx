import React from "react";
import "./story.css";
import StoryCard from "./StoryCard";
import papers from "../imgs/papers.png";
import sucess from "../imgs/sucess.png"
const Story = () => {
    
  return (
    <div className="story_section">
      {/* ********** Section 1 *************** */}
      <div className="section1">
        <div className="left_s1">
            <img src={sucess} alt="" />
        </div>
        <div className="right_s1">
        <h1>Our Stories, Our Strength</h1>
        <p>
          Welcome to a space where student stories unfold—filled with triumphs,
          challenges, and shared resilience. Each narrative contributes to a
          vibrant tapestry of growth. Join us in building a community that
          inspires, uplifts, and stands united in the journey of student
          well-being.
        </p>
        <button><a href="#sec3">Explore</a></button>
        </div>
      </div>

      {/* ********** Section 1 *************** */}
      <div className="section2">
        <h1>bla bla bla blbalba blablal balbla</h1>
        
        <div id="sec3" className="post_box">
            
            <form  action="" className="post_box_left">
                <h2>Post Details:</h2>
                <div className="forms">
                <div className="lab_inpt">
                    <label>NAME</label>
                    <input type="text"   placeholder="Enter your name here" />
                </div>
                <div className="lab_inpt">
                    <label>EMAIL</label>
                    <input type="email"   placeholder="Enter your email here" />
                </div>
                <div className="lab_inpt">
                    <label>Story</label>
                    <textarea placeholder="Enter your message here" name="" id="" cols="30" rows="10"></textarea>
                </div>
                <button>POST <i className="fa-solid fa-paper-plane"></i> </button>
                </div>
                
            </form>
            
          <div   className="post_box_right">
            <img  src={papers} alt="" />
          </div>
        </div>
      </div>
      <div  className="post_story_box">
        <StoryCard />
        <StoryCard />
        <StoryCard />
        <StoryCard />
      </div>
    </div>
  );
};

export default Story;
