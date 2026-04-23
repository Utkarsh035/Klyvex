import React from 'react';

export default function Noise() {
  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 9999,
        pointerEvents: 'none',
        opacity: 0.03,
        backgroundImage: 'url("https://res.cloudinary.com/dzm9m7p6r/image/upload/v1707144766/grain_z1z8zq.png")',
        mixBlendMode: 'overlay',
      }}
    />
  );
}
