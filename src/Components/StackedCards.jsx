import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import projects from '../data/project'; // Ensure this file contains project data.

const Card = ({ i, title, description, src, link, color, progress, totalCards }) => {
  const container = useRef(null);

  const cardStart = i / (totalCards + 1);
  const cardPeak = (i + 0.5) / (totalCards + 1);
  const cardEnd = (i + 1) / (totalCards + 1);

  const scale = useTransform(progress, 
    [cardStart, cardPeak, cardEnd], 
    [0.5, 1, 0.8]
  );

  const opacity = useTransform(progress, 
    [cardStart, cardPeak, cardEnd], 
    [0, 1, 0]
  );

  const getExitTransform = (index) => {
    const movements = [
      { x: 200, y: -100 },
      { x: -200, y: -100 },
      { x: 200, y: 100 },
      { x: -200, y: 100 },
      { x: 0, y: -200 },
    ];
    return movements[index % movements.length];
  };

  const movement = getExitTransform(i);
  const x = useTransform(progress, [cardPeak, cardEnd], [0, movement.x]);
  const y = useTransform(progress, [cardPeak, cardEnd], [0, movement.y]);

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
        top: 0,
        zIndex: totalCards - i
      }}
    >
      <motion.div
        className="card"
        style={{
          backgroundColor: color,
          scale,
          opacity,
          x,
          y,
          width: '900px',
          height: '500px',
          borderRadius: '25px',
          position: 'relative',
          padding: '50px',
          display: 'flex',
          flexDirection: 'column',
          transformOrigin: 'center',
          boxShadow: '0 25px 50px rgba(0,0,0,0.4)'
        }}
      >
        <h2 style={{
          color: 'white',
          fontSize: '2.5rem',
          margin: '0 0 30px 0',
          fontWeight: '700'
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
              fontSize: '1.2rem',
              lineHeight: '1.7',
              margin: 0,
              opacity: 0.9
            }}>
              {description}
            </p>

            <div style={{ marginTop: '30px' }}>
              <a 
                href={link} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  color: 'white',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  fontSize: '1.1rem',
                  padding: '12px 24px',
                  border: '2px solid white',
                  borderRadius: '30px',
                  transition: 'all 0.3s ease',
                  fontWeight: '500'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = 'white';
                  e.target.style.color = color;
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.color = 'white';
                }}
              >
                See More →
              </a>
            </div>
          </div>

          <div className="image-container" style={{
            width: '300px',
            height: '250px',
            position: 'relative',
            borderRadius: '20px',
            overflow: 'hidden',
            boxShadow: '0 15px 30px rgba(0,0,0,0.3)'
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

const FinalText = ({ progress, totalCards }) => {
  const textStart = totalCards / (totalCards + 1);
  const textEnd = 1;

  const scale = useTransform(progress, [textStart, textEnd], [0.5, 1]);
  const opacity = useTransform(progress, [textStart, textEnd], [0, 1]);
  const y = useTransform(progress, [textStart, textEnd], [100, 0]);

  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'sticky',
      top: 0,
      zIndex: 0
    }}>
      <motion.div
        style={{
          scale,
          opacity,
          y,
          textAlign: 'center'
        }}
      >
        <h1 style={{
          color: 'white',
          fontSize: '5rem',
          fontWeight: '800',
          margin: 0,
          background: 'linear-gradient(45deg, #3B82F6, #EF4444, #10B981, #8B5CF6, #F59E0B)',
          backgroundSize: '400% 400%',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          animation: 'gradient 3s ease infinite'
        }}>
          Our Partners
        </h1>
        <p style={{
          color: 'rgba(255,255,255,0.7)',
          fontSize: '1.5rem',
          marginTop: '30px',
          fontWeight: '300'
        }}>
          Building the future together
        </p>
      </motion.div>

      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
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
      backgroundColor: '#0f0f0f',
      minHeight: '100vh'
    }}>
      <main 
        ref={container} 
        style={{
          position: 'relative',
          height: `${(projects.length + 1) * 100}vh`
        }}
      >
        {projects.map((project, i) => (
          <Card
            key={`card_${i}`}
            i={i}
            {...project}
            progress={scrollYProgress}
            totalCards={projects.length}
          />
        ))}

        <FinalText 
          progress={scrollYProgress}
          totalCards={projects.length}
        />
      </main>
    </div>
  );
};

export default StackedCards;


