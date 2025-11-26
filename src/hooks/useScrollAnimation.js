import { useEffect, useRef, useState } from 'react';

export const useScrollAnimation = (sectionId) => {
  const [animationState, setAnimationState] = useState(0);
  const cardsRef = useRef([]);

  useEffect(() => {
    const cards = document.querySelectorAll(`.${sectionId}-card`);
    cardsRef.current = Array.from(cards);
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && animationState === 0) {
          setAnimationState(1);
          cardsRef.current.forEach((card, index) => {
            setTimeout(() => {
              card.classList.add('is-visible');
              if (index === cardsRef.current.length - 1) {
                setAnimationState(2);
              }
            }, index * 150);
          });
        } else if (!entry.isIntersecting && window.scrollY < entry.target.offsetTop) {
          setAnimationState(0);
          cardsRef.current.forEach(card => {
            card.classList.remove('is-visible');
          });
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -100px 0px' });

    const section = document.getElementById(sectionId);
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, [sectionId, animationState]);

  return animationState;
};