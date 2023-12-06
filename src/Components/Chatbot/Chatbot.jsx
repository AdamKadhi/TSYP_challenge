import React, { useState } from "react";
import "./chatbot.css";
import chaticon from "../imgs/chatbot.png";
import { Segment } from "semantic-ui-react";
import ChatBot from "react-simple-chatbot";
const Chatbot = () => {
  const steps = [
    {
      id: "Greet",
      message: "Hello, Welcome to our website",
      trigger: "Ask Name",
    },
    {
      id: "Ask Name",
      message: "Please Tell me your name",
      trigger: "waiting",
    },
    {
      id: "waiting",
      user: true,
      trigger: "Name",
    },
    {
      id: "Name",
      message:
        "Hi {previousValue}, It looks like you're looking for strategies to enhance your academic success and well-being.I'm here to help! Let's start with a quick question: How would you describe your current study routine? ",
      trigger: "issues",
    },
    {
      id: "issues",
      options: [
        { value: "Boring", label: "Boring", trigger: "Question1" },
        { value: "Good", label: "Good", trigger: "Good" },
      ],
    },
    {
      id: "Good",
      message: "That's nice",
      end: true,
    },
    {
      id: "Question1",
      message: "Sadly to hear that , what is your problem",
      trigger: "waiting2",
    },
    {
      id: "waiting2",
      user: true,
      trigger: "Question2",
    },
    {
      id: "Question2",
      message:
        "Got it! Time management is crucial. What specific challenges are you facing in managing your time?",
      trigger: "waiting3",
    },
    {
      id: "waiting3",
      user: true,
      trigger: "Question3",
    },
    {
      id: "Question3",
      message: "I understand. It's a common challenge.",
      trigger: "Question4",
    },
    {
      id: "Question4",
      message:
        "How about we explore some strategies for creating a study schedule that allows for a balance?",
      trigger: "waiting4",
    },
    {
      id: "waiting4",
      user: true,
      trigger: "Question5",
    },
    {
      id: "Question5",
      message:
        "Great! One effective strategy is to allocate specific time blocks for different activities. For instance, schedule dedicated study sessions and breaks.(here is alink to a video containing more details:)",
      trigger: "waiting5",
    },
    {
      id: "waiting5",
      user: true,
      trigger: "Question6",
    },
    {
      id: "Question6",
      message:
        "No problem! Another approach is to set realistic goals for each day and prioritize tasks based on their importance. This can help you maintain a healthy balance.",
      trigger: "theend",
    },
    {
      id: "theend",
      message: "link",
      trigger: "thanks",
    },
    {
      id: "thanks",
      user: true,
      trigger: "rethank",
    },
    {
      id: "rethank",
      message: "Anytime",
      end: true,
    },
  ];
  
  const [openchat, setopenchat] = useState(false);
  return (
    <div className="chatbott">
      <img
        onClick={() => setopenchat(true)}
        src={chaticon}
        id="chaticon"
        alt=""
      />
      {openchat ? (
        <div className="chatt">
            
        <Segment floated="right">
          <ChatBot steps={steps} />
          <button onClick={()=>setopenchat(false)} id="close_butt">x</button>
        </Segment></div>
      ) : null}
    </div>
  );
};

export default Chatbot;
