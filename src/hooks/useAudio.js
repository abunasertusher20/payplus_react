import { useEffect, useRef } from 'react';

export const useAudio = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    
    const playAudio = () => {
      setTimeout(() => {
        audio.play().then(() => {
          console.log("Muted autoplay চলছে...");
          
          audio.muted = false;
          audio.volume = 0;
          let vol = 0;
          const fadeIn = setInterval(() => {
            vol += 0.05;
            if (vol >= 1) {
              vol = 1;
              clearInterval(fadeIn);
            }
            audio.volume = vol;
          }, 100);
        }).catch(err => {
          console.log("Autoplay blocked:", err);
        });
      }, 3000);
    };

    playAudio();

    return () => {
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      }
    };
  }, []);

  return audioRef;
};