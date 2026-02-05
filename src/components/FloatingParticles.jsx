import { useMemo } from 'react';



export const FloatingParticles = ({particleColor = '#d6ccc2', particleCount = 30}) => {

  const particles = useMemo(() => [...Array(particleCount)], [particleCount]);

  return (
    <div className='absolute inset-0 overflow-hidden pointer-events-none'>
                {[...Array(particleCount)].map((_, idx) => {
                    const duration = `${15 + Math.random() * 20}s`;
                    const delay = `${-Math.random() * 10}s`;
                    const left = `${Math.random() * 100}%`;
                    const top = `${Math.random() * 100}%`;
                    return (
                        <div className='absolute w-1.5 h-1.5 rounded-full opacity-60' 
                        key={idx}
                        style={{
                            backgroundColor: particleColor, 
                            left: left, 
                            top: top,
                            animation: `slow-drift ${duration} ${delay} ease-in-out infinite`,
                            animationDelay:  `${Math.random() * 5}s`
                        }}></div>
                    )
                }
            )
        }
    </div>
  )

};