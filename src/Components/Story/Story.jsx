import React from "react";
import "./story.css";
import StoryCard from "./StoryCard";
import papers from "../imgs/papers.png";
import sucess from "../imgs/sucess.png"
import TransitionWrapper from "../TransitionWrapper";
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
const Story = () => {
    const stories=[
      {
        pdp:"https://images.rtl.fr/~c/2000v2000/rtl/www/1277212-quand-oprah-winfrey-papesse-de-la-television-americaine-a-donne-un-long-discours-digne-d-une-presidente-je-veux-le-dire-a-toutes-les-filles-qui-m-ecoutent-un-nouveau-jour-est-a-l-horizon.jpg",
        name:"Oprah Winfry",
        description:"Oprah Winfrey comes from a difficult background, marked by poverty and adversity. Raised in a tumultuous environment, she experienced difficulties at school and an unhealthy family life. Growing up poor in rural Mississippi, Oprah faced many obstacles, including abuse and instability. Despite these difficulties, she used education as a means of escape and transformation. Her journey, from those difficult beginnings to her transformation into media mogul and philanthropist, is an inspiring example of overcoming educational and societal obstacles. Oprah's commitment to education, exemplified by the Oprah Winfrey Leadership Academy for Girls, reflects her dedication to providing opportunities for those facing adversity, particularly in their studies. Her life story underscores the transformative power of education and perseverance in overcoming difficult beginnings.",
        job:"Media Executive, TV Host, Philanthropist.",
      },
      {
        pdp:"https://2c37752f54ecff3aa6de.b-cdn.net/wp-content/uploads/2022/08/21-thegem-person.png",
        name:"Nick Vujicic",
        description:"Nick Vujicic, born without limbs, has transformed his life into a powerful story of resilience and inspiration. Overcoming profound physical challenges, Nick has become a renowned motivational speaker, author, and founder of the Life without Limbs organization. His journey serves as a beacon of hope for everyone, showcasing that even in the face of adversity, one can achieve remarkable success. Nick's story emotionally empowers us, illustrating the strength of the human spirit. His unwavering positivity and ability to overcome personal struggles offer a source of inspiration for facing challenges head-on. Academically, Nick's journey encourages a growth mindset, highlighting the power of determination and a positive outlook in navigating academic pursuits. Physically, he embodies the importance of adaptation and finding strength within oneself. Reading about Nick Vujicic's life isn't just a recounting of personal triumph; it's an indirect source of motivation for students to embrace their uniqueness, surmount obstacles, and cultivate a holistic sense of well-being—academically, emotionally, and physically.",
        job:"Media Executive, TV Host, Philanthropist.",
      },
      {
        pdp:"https://dohadebates.com/wp-content/uploads/2022/03/GettyImages-1193568870-scaled-e1647965192243.jpg",
        name:"Malala Yousafzai",
        description:"Malala Yousafzai, a beacon of courage and resilience, emerged as a global advocate for education and girls' rights despite Facing immense adversity. Born in Pakistan's Swat Valley, Malala defied the oppressive Taliban regime that sought to deny education to girls. Surviving an assassination attempt, she not only recovered but continued her fight for education on the international stage. Her unwavering commitment to education underscores the transformative power of knowledge. By standing up for her right to learn, Malala empowers students to cherish their educational opportunities, fostering academic resilience. Her story teaches that even in the darkest times, one can find strength through education and determination.",
        job:"Media Executive, TV Host, Philanthropist.",
      },
      {
        pdp:"https://www.tunisienumerique.com/wp-content/uploads/2023/10/lamia-hakim-1200x971.jpg",
        name:"Lamia Hakim",
        description:"Lamia Hakim, a pioneering Tunisian, made history as the world's first 'child of the moon' to earn a Ph.D. in Biological Sciences. Overcoming the challenges of xeroderma pigmentosum, a rare genetic disorder, Lamia, at 30, exemplified unwavering determination and familial support on her arduous academic journey. Her groundbreaking thesis, 'Genetic Foundations of Phenotypic Expression in Coronilla scorpioïdes,' received high honors. Lamia's radiant smile and resilient spirit now inspire students worldwide, proving that with hope and determination, one can transform adversity into achievement. Lamia Hakim stands as a beacon of inspiration, demonstrating the extraordinary results of willpower in the pursuit of academic and personal success.",
        job:"Media Executive, TV Host, Philanthropist.",
      },
    ]
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
        
        <AccessTimeIcon></AccessTimeIcon>
        <p id="pending">Pending</p>
      </IconButton>
    </React.Fragment>
  );
  return (
    <TransitionWrapper>
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
        <h1>Your story matters, share it here and let it shine.</h1>
        
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
                <button type="reset" onClick={handleClick} >POST <i className="fa-solid fa-paper-plane"></i> </button>
                </div>
                
            </form>
            <Snackbar
        open={open}
        autoHideDuration={2500}
        onClose={handleClose}
        message="Thanks For Sharing."
        action={action}
      />
          <div   className="post_box_right">
            <img  src={papers} alt="" />
          </div>
        </div>
      </div>
      <div  className="post_story_box">
        {stories.map(el=><StoryCard el={el} key={el.name} />)}
      </div>
    </div>
    </TransitionWrapper>
  );
};

export default Story;
