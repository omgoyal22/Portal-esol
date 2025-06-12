import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import projects from '../data/project';

const Card = ({ i, title, description, src, link, color, progress, range, targetScale }) => {
  const container = useRef(null);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div 
      ref={container} 
      className="card-container"
      style={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'sticky',
        top: 0
      }}
    >
      <motion.div
        className="card"
        style={{
          backgroundColor: color,
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
          width: '1000px',
          height: '500px',
          borderRadius: '25px',
          position: 'relative',
          padding: '50px',
          display: 'flex',
          flexDirection: 'column',
          transformOrigin: 'top'
        }}
      >
        <h2 style={{
          color: 'white',
          fontSize: '2rem',
          margin: '0 0 20px 0',
          fontWeight: '600'
        }}>
          {title}
        </h2>
        
        <div className="body" style={{
          display: 'flex',
          gap: '50px',
          height: '100%'
        }}>
          <div className="description" style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}>
            <p style={{
              color: 'white',
              fontSize: '1rem',
              lineHeight: '1.6',
              margin: 0
            }}>
              {description}
            </p>
            
            <div style={{ marginTop: '20px' }}>
              <a 
                href={link} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  color: 'white',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  fontSize: '0.9rem'
                }}
              >
                See more
                <svg width="22" height="12" viewBox="0 0 22 12" fill="none">
                  <path d="M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z" fill="white"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="image-container" style={{
            width: '300px',
            height: '250px',
            position: 'relative',
            borderRadius: '15px',
            overflow: 'hidden'
          }}>
            <img
              src={src}
              alt={title}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const StackedCards = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });

  return (
    <div style={{ 
      backgroundColor: '#1a1a1a',
      minHeight: '100vh'
    }}>
      <main 
        ref={container} 
        style={{
          position: 'relative'
        }}
      >
        {projects.map((project, i) => {
          const targetScale = 1 - ((projects.length - i) * 0.05);
          return (
            <Card
              key={`p_${i}`}
              i={i}
              {...project}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </main>
    </div>
  );
};

export default StackedCards;
