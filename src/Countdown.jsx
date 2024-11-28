import React, { useState, useEffect } from 'react';
import mensaje1 from './images/mensaje1.png';
import mensaje2 from './images/mensaje2.png';

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
          <h2>💌 Hay 324 mensajes guardados como favoritos en mi teléfono</h2>
          <p>De esos 324, hay 2 favoritos que me has enviado que hoy quiero recordar:</p>
          <div className="photos">
            <div className="photo-container">
              <img src={mensaje1} alt="Mensaje 1" />
              <p className="photo-date">Fecha: 13/09/22</p>
            </div>
            <div className="photo-container">
              <img src={mensaje2} alt="Mensaje 2" />
              <p className="photo-date">Fecha: 2/09/22</p>
            </div>
          </div>
          <p>
            Deseo con todo mi corazón que ese mismo deseo que tenías al inicio por verme, por pasar
            un momento conmigo, y aunque solo fuera un minuto vernos,
            que después de dos años sigas teniendo ese mismo deseo. Y que cuando veas
            el reloj, sigas sintiendo ganas de verme, así como yo deseo verte cada día. 
          </p>
          <p>Te amo para toda mi vida ❤️ </p>
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