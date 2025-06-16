import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './ClientReviews.css';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    title: "Recommended",
    content: "Very happy with the app. Simple payments, verification, and 24/7 support.",
    avatar: "VK",
    name: "Vamsi K.",
    bg: "#bcffbb"
  },
  {
    title: "User friendly",
    content: "Would highly recommend Jeton to friends. Great UI and speed.",
    avatar: "LA",
    name: "Leonie A.",
    bg: "#bbd2ff"
  },
  {
    title: "Great for Germany",
    content: "Jeton makes payments across Europe seamless. Big thumbs up.",
    avatar: "KR",
    name: "Karl R.",
    bg: "#f5ffbb"
  },
  {
    title: "Easy and Fast",
    content: "I love using Jeton Card for everyday purchases. Very smooth.",
    avatar: "DP",
    name: "Dennis P.",
    bg: "#ffbbf0"
  },
  {
    title: "Secure and clean",
    content: "Never faced an issue with Jeton. Always consistent and secure.",
    avatar: "AA",
    name: "Aishwarya A.",
    bg: "#ffc6ec"
  }
];

const ClientReviews = () => {
  const wrapperRef = useRef();
  const cardRefs = useRef([]);

  useLayoutEffect(() => {
    cardRefs.current.forEach((card, i) => {
      if (i === 0) return; // skip first

      gsap.fromTo(
        card,
        { y: -50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          scrollTrigger: {
            trigger: cardRefs.current[i - 1],
            start: 'bottom center+=50',
            toggleActions: 'play none none reverse'
          }
        }
      );
    });
  }, []);

  return (
    <section className="client-reviews-unfold" ref={wrapperRef}>
      <div className="background" />
      <h2 className="client-heading">Hear it from our clients</h2>
      <div className="card-stack">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="review-card"
            ref={(el) => (cardRefs.current[index] = el)}
          >
            <p className="review-title">{item.title}</p>
            <p className="review-content">{item.content}</p>
            <div className="review-footer">
              <span className="review-avatar" style={{ backgroundColor: item.bg }}>
                {item.avatar}
              </span>
              <span>{item.name}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClientReviews;