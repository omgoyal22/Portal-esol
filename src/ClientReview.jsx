//ClientReviewPages.jsx
import React, { useEffect, useRef } from 'react';
import './ClientReview.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const reviews = [
  {
    name: "Vamsi K.",
    title: "Highly Recommended",
    content: "I'm genuinely impressed with how smooth the hiring process became using this platform. The AI does an amazing job shortlisting the right candidates—saved us weeks of manual work!",
    avatar: "/images/man 1.png"
  },
  {
    name: "Leonie A.",
    title: "Great for All Roles",
    content: "The platform’s interface is super intuitive, and it works just as well for tech as it does for operations or HR roles. It’s now an essential tool for our hiring team.",
    avatar: "/images/man 2.png"
  },
  {
    name: "Karl R.",
    title: "Time-Saver for Europe Hiring",
    content: "We’ve used this across multiple European markets, and it’s been consistent and efficient. The multilingual support is a big plus. It just works—no back-and-forth!",
    avatar: "/images/man 3.png"
  },
  {
    name: "Dennis P.",
    title: "Super Fast and Accurate",
    content: "I use this platform almost daily for screening candidates. The AI assessments are spot-on, especially for non-technical roles like marketing and admin. Super smooth experience.",
    avatar: "/images/man 4.png"
  },
  {
    name: "Kainaat S.",
    title: "Reliable and Secure",
    content: "Honestly, this platform has streamlined our end-to-end recruitment. From resume parsing to video interviews, it’s been secure, fair, and stress-free. Highly recommend it!",
    avatar: "/images/women 1.png"
  }
];

const ClientReview = () => {
  const cardRefs = useRef([]);

  useEffect(() => {
    cardRefs.current.forEach((el, i) => {
      if (!el) return;
      gsap.fromTo(el,
        { opacity: 0, y: 100, rotateX: -90, transformOrigin: "top center" },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 0.8,
          ease: "power4.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none reverse"
          },
          delay: i * 0.05
        }
      );
    });
  }, []);

  return (
    <div className="client-review-page">
      {/* <h2 className="client-title">What Our Users Say</h2> */}
      <div className="client-title-section">
          <h1 className="client-main-heading">Hear from our clients</h1>
          <h2 className="client-subheading">What Our Users Say</h2>
      </div>
      <div className="review-stack">
        {reviews.map((review, index) => (
          <div
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
            className="review-card"
          >
            <div className="review-header">
              <img src={review.avatar} alt={review.name} className="review-avatar" />
              <div>
                <h3 className="review-name">{review.name}</h3>
                <p className="review-title">{review.title}</p>
              </div>
            </div>
            <p className="review-content">“{review.content}”</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientReview;