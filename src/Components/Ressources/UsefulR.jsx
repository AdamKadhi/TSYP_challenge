import React from "react";
import "./usefulR.css";
import TransitionWrapper from "../TransitionWrapper";
import RessourceCard from "./RessourceCard";
const UsefulR = () => {
  const articles = [
    {
      poster:
        "https://i.pinimg.com/564x/c8/92/ad/c892ad63efdee5df021ab09568bf4726.jpg",
      title: "Mindful - healthy mind, healthy living",
      description:
        "Mindful is dedicated to sharing the gifts of mindfulness through content, training, courses, and directories—helping people enjoy better health, foster more caring relationships, and cultivate a more compassionate society. Embark on this mindful adventure with us, and embrace the positive changes that a healthy mind can bring to every aspect of your life. Join our community today and unlock the door to a more serene, balanced, and fulfilling lifestyle.",
      link: "https://www.mindful.org",
    },
    {
      poster:
        "https://i.pinimg.com/564x/7f/72/cd/7f72cdf7964e005594dd09a021d8cfa8.jpg",
      title: "Student Minds",
      description:
        "Welcome to Student Minds, a dedicated space where we empower students and university community members to take charge of their mental health, provide support to one another, and drive positive change. Our mission is to create a community that values and prioritizes mental well-being, fostering a culture where every individual has the tools and resources needed to thrive. Join us in this transformative endeavor, where every action contributes to a more mentally healthy and supportive environment.",
      link: "https://www.studentminds.org.uk",
    },
    {
      poster:
        "https://i.pinimg.com/564x/21/d9/0d/21d90d102a016551a950fd726f4ed9c1.jpg",
      title: "Mastering Mind Wellness",
      description:
        "Dive into the realm of mental well-being as Dr. Julie Smith, a world-renowned psychologist, guides you through powerful techniques to break free from the chains of overthinking and anxiety. In this podcast, discover practical strategies and expert insights that empower you to regain control of your mind, fostering a calmer and more centered life.",
      link: "https://www.youtube.com/watch?v=iLlrIi9-NfQ",
    },
    {
      poster:
        "https://i.pinimg.com/564x/9e/12/fb/9e12fb237af419bec8d1c94fa30e25c3.jpg",
      title: "Mindful Education",
      description:
        "Dive into the transformative world of prioritizing mental health in schools with the latest podcast featuring Hailey Hardcastle. In this insightful episode, Hailey explores the crucial topic of why taking a break is essential for the well-being of students. Gain valuable insights, learn practical techniques, and discover effective strategies for weaving mental health into the fabric of our educational institutions.",
      link: "https://www.youtube.com/watch?v=vD0w_gOEbUI",
    },
    {
      poster:
        "https://i.pinimg.com/564x/6a/b9/cb/6ab9cb6f355939285959f1fa481787e1.jpg",
      title: "Yoga Bliss",
      description:
        "Immerse yourself in the world of yoga as the tutorial guides you through practices that go beyond the physical, fostering a deeper connection with your body and mind. It is carefully crafted to empower you with tools for alignment, mindful breathing, and holistic well-being. Whether you're a beginner seeking the foundations or an experienced yogi aiming to refine your practice, this tutorial offers invaluable.",
      link: "https://www.youtube.com/watch?v=j7rKKpwdXNE",
    },
    {
      poster:
        "https://i.pinimg.com/564x/d0/79/37/d07937284e497b096d4f5bc5521e7ea3.jpg",
      title: "Breathe and Be",
      description:
        "Discover the art of staying grounded as you navigate various breathing exercises designed to bring balance to your mind, body, and soul. This tutorial guides you through practices that encourage mindfulness, relaxation, and a deeper connection to yourself. Embark on this enlightening experience, where each breath becomes a tool for achieving equilibrium.",
      link: "https://www.youtube.com/watch?v=Oy4wvF9Z24A",
    },
  ];
  return (
    <TransitionWrapper>
      <div className="usefulR">
        <div className="articles">
          <h1>Useful Ressources</h1>
          {articles.map((el) => (
            <RessourceCard el={el} />
          ))}
        </div>
        <div  className="popular_articles">
          <h2>
            Popular <span></span>
          </h2>
          <a href="https://www.mindful.org" target="_blank" className="pop_article">
            
            <img
              src="https://i.pinimg.com/564x/c8/92/ad/c892ad63efdee5df021ab09568bf4726.jpg"
              alt=""
            />
            <h4>Mindful - healthy mind, healthy living</h4>
          </a>
          <a href="https://www.youtube.com/watch?v=vD0w_gOEbUI" target="_blank" className="pop_article">
            <img
              src="https://i.pinimg.com/564x/9e/12/fb/9e12fb237af419bec8d1c94fa30e25c3.jpg"
              alt=""
            />
            <h4>Mindful Education</h4>
          </a>
          <a href="https://www.youtube.com/watch?v=j7rKKpwdXNE" target="_blank" className="pop_article">
            <img
              src="https://i.pinimg.com/564x/6a/b9/cb/6ab9cb6f355939285959f1fa481787e1.jpg"
              alt=""
            />
            <h4>Yoga Bliss</h4>
          </a>
        </div>
      </div>
    </TransitionWrapper>
  );
};

export default UsefulR;
