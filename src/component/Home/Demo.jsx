import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
// ... image imports and cardData ...

const Demo = () => {
  const cardsRef = useRef([]);

  useGSAP(() => {
    // Animate the cards
    cardsRef.current.forEach((card, index) => {
      const cardDataAtIndex = cardData[index];

      if (card && cardDataAtIndex) { // Double check for card and data
        gsap.context(() => {
          gsap.to(card, {
            delay: index * 0.2, // Optional stagger
            zIndex: cardDataAtIndex.zIndex,
            left: cardDataAtIndex.style.left,
            right: cardDataAtIndex.style.right,
            rotate: cardDataAtIndex.rotate,
            opacity: 1,
            duration: 1,
            ease: "easeInOut",
          });
        }, card);
      }
    });

    return () => gsap.killAll();
  }, [cardData]);

  return (
    <div className="cardholder">
      {cardData.map((card, index) => (
        <div
          key={index}
          className={`card ${card.className}`}
          ref={(el) => (cardsRef.current[index] = el)} // Correctly set the ref
        >
          <img src={card.img} alt={`img${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default Demo;