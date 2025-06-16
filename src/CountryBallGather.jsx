import React, { useEffect, useRef, useState } from "react";
import Matter from "matter-js";
import "./CountryBallGather.css";

const countries = [
  "in", "us", "gb", "jp", "br", "de", "fr", "it", "es", "ca",
  "au", "kr", "ru", "cn", "mx", "ar", "nl", "se", "ch", "no",
  "dk", "be", "fi", "pl", "pt", "at", "ie", "nz", "za", "gr"
];

const CountryBallGather = () => {
  const sceneRef = useRef(null);
  const engineRef = useRef(Matter.Engine.create());
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const { Engine, Render, World, Bodies, Runner } = Matter;
    const engine = engineRef.current;

    const width = window.innerWidth;
    const height = window.innerHeight;

    const render = Render.create({
      element: sceneRef.current,
      engine: engine,
      options: {
        width,
        height,
        wireframes: false,
        background: "transparent"
      }
    });

    const balls = countries.map((code, index) => {
      const radius = 32;
      const x = Math.random() * width;
      const y = -Math.random() * height;
      return Bodies.circle(x, y, radius, {
        restitution: 0.7,
        render: {
          sprite: {
            texture: `https://flagcdn.com/w80/${code}.png`,
            xScale: 0.8,
            yScale: 0.8
          }
        }
      });
    });

    const ground = Bodies.rectangle(width / 2, height - 20, width, 40, {
      isStatic: true,
      render: { fillStyle: "#1a237e" }
    });

    const leftWall = Bodies.rectangle(0, height / 2, 40, height, {
      isStatic: true,
      render: { visible: false }
    });

    const rightWall = Bodies.rectangle(width, height / 2, 40, height, {
      isStatic: true,
      render: { visible: false }
    });

    World.add(engine.world, [...balls, ground, leftWall, rightWall]);

    Engine.run(engine);
    Render.run(render);
    Runner.run(Runner.create(), engine);

    setLoaded(true);

    return () => {
      Render.stop(render);
      World.clear(engine.world);
      Engine.clear(engine);
      render.canvas.remove();
    };
  }, []);

  return (
    <div className="physics-container">
      <div className="stats-card">
        <h2>📊 Live Hiring Stats</h2>
        <ul>
          <li>👥 Candidates: <strong>2,137</strong></li>
          <li>🏢 Companies: <strong>143</strong></li>
          <li>📌 Jobs Posted: <strong>38</strong></li>
        </ul>
        <button>Explore Jobs →</button>
      </div>
      <div ref={sceneRef} className="canvas-overlay" />
    </div>
  );
};

export default CountryBallGather;
