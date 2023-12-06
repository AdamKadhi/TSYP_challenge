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
      trigger: "issues1",
    },


    {
      id: "issues1",
      options: [
        { value: "I'm struggling to manage my time effectively.", label: "I'm struggling to manage my time effectively.", trigger: "Question1" },
        { value: "I find it hard to retain information while studying(study technics)", label: "I find it hard to retain information while studying(study technics)", trigger: "Question2" },
	{ value: "I often find myself getting distracted while studying", label: "I often find myself getting distracted while studying", trigger: "Question3" },
	{ value: "Collaboration", label: "Collaboration", trigger: "Question4" },
      ],
    },

    {
      id: "Question1",
      message: "Got it! Time management is crucial. What specific challenges are you facing in managing your time?",
      options: [
        { value: "Balancing work and personal life is tough", label: "Balancing work and personal life is tough", trigger: "Question1.1" },
        { value: "I have trouble prioritizing tasks", label: "I have trouble prioritizing tasks", trigger: "Question1.2" },
      ],    
    },

    {
      id: "Question2",
      message: "I see. Let's explore some study techniques. What type of information do you usually struggle to retain?",
      options: [
        { value: "Facts and details", label: "Facts and details", trigger: "Question2.1" },
        { value: "Concepts and theories", label: "Concepts and theories", trigger: "Question2.2" },
	{ value: "Formulas and equations", label: "Formulas and equations", trigger: "Question2.3" },
	{ value: "Historical timelines", label: "Historical timelines", trigger: "Question2.4" },
      ],    
    },
	
    {
      id: "Question3",
      message: "No worries, distractions happen to the best of us! Identifying the specific distractions can be a good starting point. What are the most common distractions you face?",
      options: [
        { value: "Social media", label: "Social media", trigger: "Question3.1" },
        { value: "Noise", label: "Noise", trigger: "Question3.2" },
      ],    
    },	

    {
      id: "Question4",
      message: "Do you prefer studying alone or in a group?",
      options: [
        { value: "Alone", label: "Alone", trigger: "Question4.1" },
        { value: "With a study group", label: "With a study group", trigger: "Question4.2" },
      ],    
    },	

    {
      id: "Question1.1",
      message: "I understand. It's a common challenge. How about we explore some strategies for creating a study schedule that allows for a balance?",
      options: [
        { value: "Sure!", label: "Sure!", trigger: "Question1.1.1" },
        { value: "Not sure, tell me more", label: "Not sure, tell me more", trigger: "Question1.1.2" },
      ],    
    },	

    {
      id: "Question1.1.1",
      message: "Great! One effective strategy is to allocate specific time blocks for different activities. For instance, schedule dedicated study sessions and breaks.(here is alink to a video containing more details:)",
	end:true,
    },		

    {
      id: "Question1.1.2",
      message: "No problem! Another approach is to set realistic goals for each day and prioritize tasks based on their importance. This can help you maintain a healthy balance.",
	end:true,
    },	

    {
      id: "Question1.2",
      message: "Got it. Prioritization is key. What types of tasks do you find most challenging to prioritize?",
      options: [
        { value: "Assignments", label: "Assignments", trigger: "Question1.2.1" },
        { value: "Study Sessions", label: "Study Sessions", trigger: "Question1.2.2" },
      ],    
    },	

    {
      id: "Question1.2.1",
      message: "Assignments can be overwhelming. One method is to break them into smaller tasks and tackle them one by one.",
	end:true,  
    },	

    {
      id: "Question1.2.2",
      message: "Prioritizing study sessions is crucial. Are you currently using any specific methods to determine which subjects or topics to focus on first?",
	options: [
        { value: "Yes, I have a plan", label: "Yes, I have a plan", trigger: "Question1.2.2.1" },
        { value: "Yes, I have a plan", label: "Yes, I have a plan", trigger: "Question1.2.2.2" },
      ], 
    },	

    {
      id: "Question1.2.2.1",
      message: "That's fantastic! Having a plan is a great start. To enhance your study sessions, consider incorporating the Pomodoro Technique. It involves 25 minutes of focused study followed by a 5-minute break. After four cycles, take a longer break.",
end:true, 
    },

    {
      id: "Question1.2.2.2",
      message: "No worries! One effective method is to prioritize based on urgency and importance. Use a matrix to categorize tasks into four quadrants: urgent and important, not urgent but important, urgent but not important, and neither. This can help you allocate your time more efficiently",
end:true, 
    },


    {
      id: "Question2.1",
      message: "Got it. Retaining facts and details can be challenging. One effective technique is active recall. Instead of simply re-reading, try recalling the information from memory. Create flashcards with key facts and quiz yourself regularly",end:true,
       },	

    {
      id: "Question2.2",
      message: "Understanding concepts and theories is crucial. Consider creating mind maps or diagrams to visualize the relationships between different ideas. Additionally, try teaching the concept to someone else or explaining it as if you were presenting to a class",end:true,
    },

    {
      id: "Question2.3",
      message: "erfect! Formulas and equations often benefit from repetitive practice. Create practice problems for yourself and solve them regularly. Additionally, try to understand the underlying principles behind each formula, as this can aid in retention.", end:true,
    },

    {
      id: "Question2.4",
      message: "Historical timelines can be quite detailed. One effective technique is to create a visual timeline or use mnemonic devices to associate key events with memorable images or phrases. Breaking down timelines into smaller, chronological segments can also make them more manageable",  end:true,  
    },

    {
      id: "Question3.1",
      message: "Social media can be quite tempting. One effective strategy is to use apps or browser extensions that temporarily block access to social media during study sessions",  
end:true 
    },

    {
      id: "Question3.2",
      message: "Dealing with noise can be challenging. You can use noise-canceling headphones or find a quieter study environment.",   
end:true
    },

    {
      id: "Question4.1",
      message: "Studying alone has its advantages! It allows for personalized focus and flexibility in your study routine.You can go at your own pace and tailor your environment to suit your preferences. You can incorporate techniques like active recall or flashcards to enhance your solo study sessions or try group study for sharing insights and information",   
end:true
    },	


    {
      id: "Question4.2",
      message: "Collaborative learning can be a powerful tool! Studying in a group brings diverse perspectives and shared insights. It encourages discussion and can help reinforce concepts. While group study is beneficial, it's also important to strike a balance and maintain individual focus. You should set specific goals for group sessions and incorporate individual study time",   
	end:true
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
