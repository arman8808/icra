import React, { useEffect, useRef, useState } from 'react';


const FadeInSection = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(domRef.current);
        }
      });
    });

    observer.observe(domRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`fade-in ${isVisible ? 'show w-full flex items-center justify-center flex-col' : 'w-full flex items-center justify-center flex-col'}`}
      ref={domRef}
    >
      {children}
    </div>
  );
};

export default FadeInSection;
