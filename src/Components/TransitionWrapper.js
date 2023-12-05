// TransitionWrapper.js
import React, { useState, useEffect } from 'react';

const TransitionWrapper = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true); // Trigger the transition when the component mounts
  }, []);

  return (
    <div className={`fade-in ${isVisible ? 'active' : ''}`}>
      {children}
    </div>
  );
};

export default TransitionWrapper;
