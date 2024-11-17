import React, { useState, useEffect } from 'react';

function Countdown() {
  const targetDate = new Date('2024-11-29T00:00:00');
  //const targetDate = new Date('2024-11-14T00:00:00'); // Fecha de ayer

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [showLetter, setShowLetter] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      setTimeLeft(newTimeLeft);

      if (
        newTimeLeft.days <= 0 &&
        newTimeLeft.hours <= 0 &&
        newTimeLeft.minutes <= 0 &&
        newTimeLeft.seconds <= 0
      ) {
        setShowLetter(true);
        clearInterval(timer);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  function calculateTimeLeft() {
    const difference = targetDate - new Date();
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const seconds = Math.floor((difference / 1000) % 60);
    return { days, hours, minutes, seconds };
  }

  return (
    <div className="countdown">
      {showLetter ? (
        <div className="letter">
          <h2>Mi carta para ti 💌</h2>
          <p>
            Querido amor de mi vida,  
            Estos dos años a tu lado han sido los más hermosos que jamás
            podría haber imaginado. Cada momento contigo es un regalo, y 
            espero seguir creando recuerdos a tu lado por muchos años más.  
            Te amo con todo mi corazón. ❤️  
            <br />
            Con todo mi amor, [Tu Nombre]
          </p>
        </div>
      ) : (
        <>
          <h2>Faltan:</h2>
          <div className="time">
            <span>{timeLeft.days} días</span>
            <span>{timeLeft.hours} horas</span>
            <span>{timeLeft.minutes} minutos</span>
            <span>{timeLeft.seconds} segundos</span>
          </div>
          <p>para cumplir dos años a tu lado ❤️</p>
        </>
      )}
    </div>
  );
}

export default Countdown;
