import React from "react";
import "./home.css";
import logo from "../imgs/logo.webp";
import firstimg from "../imgs/first.webp";
import pillar from "../imgs/pillar.webp";
import box from "../imgs/box.webp"
import TransitionWrapper from "../TransitionWrapper";
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
const Home = () => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment>
      
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        
        <ThumbUpAltIcon></ThumbUpAltIcon>
        
      </IconButton>
    </React.Fragment>
  );
  return (
    <TransitionWrapper>
    <div className="home_page">
      

      {/* *********** Section 1 ******************* */}
      <div className="section_1">
        <div className="s1_left">
          <h1>
            Student Well <br /> Being Campus
          </h1>
          <p>
            We're here to support your physical and mental wellbeing journey.
          </p>
          <button>Get Started</button>
        </div>
        <div className="s1_right">
          <img src={firstimg} alt="" />
        </div>
      </div>

      {/* *********** Section 2 ******************* */}
      <div className="section_2">
        <div className="s2_left">
          <img src={pillar} alt="" />
        </div>
        <div className="s2_right">
          <h1>Our Mission</h1>
          <p>
            Step into the Student Wellbeing Campus your ultimate guide to
            keeping both your body and mind in top shape. We believe in easy,
            effective self-care, and this space is all about helping you achieve
            that during your university adventure. Dive into our articles, soak
            up the positive vibes, and let's make your wellbeing journey a
            breeze!
          </p>
          <button>TAKE YOUR TEST</button>
        </div>
      </div>

      {/* *********** Section 3 ******************* */}
      <div className="section_3">
        <div className="s3_cont">

        
        <div className="s3_left">
            <h1>Let's talk</h1>
            <p>Have a Question or Feedback? Let Us know!</p>
        </div>
        
            <form  action="" className="s3_right">
                <div>
                <div className="box">
                    <label>NAME</label>
                    <input type="text"   placeholder="Enter your name here" />
                </div>
                <div className="box">
                    <label>EMAIL</label>
                    <input type="email"   placeholder="Enter your email here" />
                </div>
                <div className="box">
                    <label>MESSAGE</label>
                    <input type="text"   placeholder="Enter your message here" />
                </div>
                </div>
                <button onClick={handleClick} type="reset" >SEND <i className="fa-solid fa-paper-plane"></i> </button>
            </form>
            <Snackbar
        open={open}
        autoHideDuration={2500}
        onClose={handleClose}
        message="Thanks For Your Feedback"
        action={action}
      />
            </div>
      </div>
    {/* *********** Section 4 ******************* */}
    <div className="section_4">
        <div className="s4_box">
            <img src={box} alt="" />
            <h1>Fueling Success Through Student Well-Being. </h1>
            <h2>Your journey begins today!</h2>
            <button>Try Now</button>
        </div>
    </div>

    {/* *********** Section 4 ******************* */}
    <footer>
        <img src={logo} alt="" />
        <div className="social">
        <i className="fa-brands fa-facebook"></i>
        <i className="fa-brands fa-instagram"></i>
        <i className="fa-brands fa-twitter"></i>
        </div>
        <p>All Rights Reserved.</p>
    </footer>
    </div>
    </TransitionWrapper>
  );
};

export default Home;
