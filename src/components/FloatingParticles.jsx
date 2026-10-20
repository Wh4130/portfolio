import { useState } from 'react';

export const FloatingParticles = ({particleColor = '#d6ccc2', particleCount = 30}) => {

  // 只在第一次渲染時產生隨機位置與動畫參數
  const [particles] = useState(() =>
    Array.from({length: particleCount}, () => ({
      duration: `${15 + Math.random() * 20}s`,
      delay: `${-Math.random() * 10}s`,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 5}s`
    }))
  );

  return (
    <div className='absolute inset-0 overflow-hidden pointer-events-none'>
      {particles.map((p, idx) => (
        <div className='absolute w-1.5 h-1.5 rounded-full opacity-60'
          key={idx}
          style={{
            backgroundColor: particleColor,
            left: p.left,
            top: p.top,
            animation: `slow-drift ${p.duration} ${p.delay} ease-in-out infinite`,
            animationDelay: p.animationDelay
          }}></div>
      ))}
    </div>
  )

};
