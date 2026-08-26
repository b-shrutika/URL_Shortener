import React, { useState, useEffect, useRef } from 'react';

const VantaBirdsBackground = () => {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    let effect = null;

    const initVanta = () => {
      if (window.VANTA && window.VANTA.BIRDS && vantaRef.current && !effect) {
        effect = window.VANTA.BIRDS({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          backgroundColor: 0x0a0e27, // Midnight Deep Blue (#0a0e27)
          color1: 0xff1493,          // Vivid Hot Neon Magenta Pink (#FF1493)
          color2: 0xffa726,          // Vibrant Sunset Orange Gold (#FFA726)
          colorMode: "varianceGradient",
          birdSize: 1.20,
          wingSpan: 24.00,
          speedLimit: 4.00,
          separation: 50.00,
          alignment: 20.00,
          cohesion: 20.00,
          quantity: 4.00
        });
        setVantaEffect(effect);
      }
    };

    if (window.VANTA && window.VANTA.BIRDS) {
      initVanta();
    } else {
      const interval = setInterval(() => {
        if (window.VANTA && window.VANTA.BIRDS) {
          clearInterval(interval);
          initVanta();
        }
      }, 100);
      return () => clearInterval(interval);
    }

    return () => {
      if (effect) effect.destroy();
    };
  }, []);

  return (
    <>
      <div
        ref={vantaRef}
        style={{ zIndex: -5 }}
        className="fixed inset-0 w-full h-full pointer-events-none"
      />
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          zIndex: -4,
          background:
            "radial-gradient(ellipse 800px 500px at 50% 40%, rgba(219,39,119,0.35), transparent 70%), radial-gradient(ellipse 600px 400px at 80% 90%, rgba(236,72,153,0.25), transparent 70%)",
        }}
      />
    </>
  );
};

export default VantaBirdsBackground;
