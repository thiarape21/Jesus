import React, { useState } from 'react';
import './App.css'; // Asegúrate de incluir el archivo CSS

// Si las imágenes están en 'src/images', importa las imágenes aquí
import foto1 from './images/foto1.jpeg';
import foto2 from './images/foto2.jpeg';
import foto3 from './images/foto3.jpeg';
import foto4 from './images/foto4.jpeg';
import foto5 from './images/foto5.jpeg';
import foto6 from './images/foto6.jpeg';
import foto7 from './images/foto7.jpeg';
import foto8 from './images/foto8.jpeg';
import foto9 from './images/foto9.jpeg';
import foto10 from './images/foto10.jpeg';
import foto11 from './images/foto11.jpeg';
import foto12 from './images/foto12.jpeg';
import foto13 from './images/foto13.jpeg';
import foto14 from './images/foto14.jpeg';
import foto15 from './images/foto15.jpeg';
import foto16 from './images/foto16.jpeg';
import foto17 from './images/foto17.jpeg';
import foto18 from './images/foto18.jpeg';
import foto19 from './images/foto19.jpeg';
import foto20 from './images/foto20.jpeg';
import foto21 from './images/foto21.jpeg';
import foto22 from './images/foto22.jpeg';
import foto23 from './images/foto23.jpeg';
import foto24 from './images/foto24.jpeg';
import foto25 from './images/foto25.jpeg';
import foto26 from './images/foto26.jpeg';
import foto27 from './images/foto27.jpeg';
import foto29 from './images/foto29.jpeg';
import foto30 from './images/foto30.jpeg';
import foto31 from './images/foto31.jpeg';
import foto32 from './images/foto32.jpeg';
import foto33 from './images/foto33.jpeg';
import foto34 from './images/foto34.jpeg';
import foto35 from './images/foto35.jpeg';
import foto36 from './images/foto36.jpeg';
import foto37 from './images/foto37.jpeg';
import foto38 from './images/foto38.jpeg';
import foto39 from './images/foto39.jpeg';
import foto40 from './images/foto40.jpeg';
import foto41 from './images/foto41.jpeg';
import foto42 from './images/foto42.jpeg';
import foto43 from './images/foto43.jpeg';
import foto44 from './images/foto44.jpeg';
import foto45 from './images/foto45.jpeg';
import foto46 from './images/foto46.jpeg';
import foto47 from './images/foto47.jpeg';
import foto48 from './images/foto48.jpeg';
import foto49 from './images/foto49.jpeg';
import foto50 from './images/foto50.jpeg';
import foto51 from './images/foto51.jpeg';
import foto52 from './images/foto52.jpeg';
import foto53 from './images/foto53.jpeg';
import foto54 from './images/foto54.jpeg';
import foto55 from './images/foto55.jpeg';
import foto56 from './images/foto56.jpeg';
import foto57 from './images/foto57.jpeg';
import foto58 from './images/foto58.jpeg';
import foto59 from './images/foto59.jpeg';
import foto60 from './images/foto60.jpeg';
import foto61 from './images/foto61.jpeg';
import foto62 from './images/foto62.jpeg';
import foto63 from './images/foto63.jpeg';
import foto64 from './images/foto64.jpeg';
import foto65 from './images/foto65.jpeg';
import foto66 from './images/foto66.jpeg';
import foto67 from './images/foto67.jpeg';
import foto68 from './images/foto68.jpeg';
import foto69 from './images/foto69.jpeg';
import foto70 from './images/foto70.jpeg';
import foto71 from './images/foto71.jpeg';
import foto72 from './images/foto72.jpeg';
import foto73 from './images/foto73.jpeg';
import foto74 from './images/foto74.jpeg';
import foto75 from './images/foto75.jpeg';
import foto76 from './images/foto76.jpeg';
import foto77 from './images/foto77.jpeg';
import foto78 from './images/foto78.jpeg';
import foto79 from './images/foto79.jpeg';
import foto80 from './images/foto80.jpeg';
import foto81 from './images/foto81.jpeg';
import foto82 from './images/foto82.jpeg';
import foto83 from './images/foto83.jpeg';
import foto84 from './images/foto84.jpeg';
import foto85 from './images/foto85.jpeg';
import foto86 from './images/foto86.jpeg';
import foto87 from './images/foto87.jpeg';
import foto88 from './images/foto88.jpeg';
import foto89 from './images/foto89.jpeg';
import foto90 from './images/foto90.jpeg';
import foto91 from './images/foto91.jpeg';
import foto92 from './images/foto92.jpeg';
import foto93 from './images/foto93.jpeg';
import foto94 from './images/foto94.jpeg';
import foto95 from './images/foto95.jpeg';


function Gallery() {
  // Definir las rutas de las fotos y sus descripciones
  const photos = [
    { src: foto1, description: 'Nuestra primer foto juntos, en nuestras citas de helado' },
    { src: foto2, description: 'Nuestra primer salida juntos. Me sentía tan feliz de ya poder salir contigo' },
    { src: foto3, description: 'Nuestra primer trasnochada juntos, ya me conociste happy jaja' },
    { src: foto4, description: 'Cuando ya tuve un cuartito, y ya no dormia en el piso' },
    { src: foto5, description: 'Una salidita juntos, me encanta como te ves con esa sueta' },
    { src: foto6, description: 'Nuestra primer fotito en el espejo' },
    { src: foto7, description: 'Peleados pero aún así nos tomamos fotitos jaja' },
    { src: foto8, description: 'De nuestras fotos favoritas' },
    { src: foto9, description: 'Primer cumpleaños juntos' },
    { src: foto10, description: 'Feliz por cada día que salimos juntos' },
    { src: foto11, description: 'Cuando estabamos fit jajaja' },
    { src: foto12, description: 'Feliz de poder compartir contigo' },
    { src: foto13, description: 'Gracias por cuidarme siemore' },
    { src: foto14, description: 'Tenemos que volver a comer hamburguesas ahí' },
    { src: foto15, description: 'Fotito en el parque con el amor de mi vida' },
    { src: foto16, description: '"El día que llegue con flores es porqué le voy a pedir que seamos novios" -Jeanca' },
    { src: foto17, description: 'Y desde ese día empezamos a celebrar cada 29' },
    { src: foto18, description: 'Fui demasiado feliz ese día' },
    { src: foto19, description: 'Gracias por comprarme pizza ese día' },
    { src: foto20, description: 'Gracias por acompañarme cada día a la parada' },
    { src: foto21, description: 'Una comidita después del trabajo' },
    { src: foto22, description: 'Nuestras salidas al hospital jaja' },
    { src: foto23, description: 'Nuestra primera vez en una piscina' },
    { src: foto24, description: 'Viajando a Grecia' },
    { src: foto25, description: 'Siendo muy feliz a tu lado' },
    { src: foto26, description: 'Celebrando nuestra primer navidad juntos' },
    { src: foto27, description: 'Gracias por hacerme sentir linda y segura' },
    { src: foto29, description: 'Una salidita a comer heladito, como al principio' },
    { src: foto30, description: 'Tu haciste que mi cara se iluminara de nuevo' },
    { src: foto31, description: 'No me volvería a montar en eso' },
    { src: foto32, description: 'Primer año nuevo juntos' },
    { src: foto33, description: 'Empezando increible el año' },
    { src: foto34, description: 'Descripción de la Foto 34' },
    { src: foto35, description: 'Y de aquí empezó a cambiar nuestras vidas' },
    { src: foto36, description: '2023' },
    { src: foto37, description: 'Quien diría que compartiriamos nuestras vidas por un año entero juntos. Pd: me llevaste a comer un sushi muy rico' },
    { src: foto38, description: 'Nuestras saliditas a ver el atradecer' },
    { src: foto39, description: 'Un hombre serio eres' },
    { src: foto40, description: 'Pero hermoso cuando te logro sacar una sonrisa' },
    { src: foto41, description: 'Esperando a que laven el carrito' },
    { src: foto42, description: 'Un hombre demasiado guapo' },
    { src: foto43, description: 'Gracias por abrirme una parte de tu corazón donde solo estaba Aura' },
    { src: foto44, description: 'Nuestra cita a ver la pelicula al aire libre' },
    { src: foto45, description: 'Espero poder sorprenderte cada año y poder seguir celebrando tu vida mi amor' },
    { src: foto46, description: 'Obviamente yo gané' },
    { src: foto47, description: 'Nuestro viaje juntitos' },
    { src: foto48, description: 'Antes del dolor de panza' },
    { src: foto49, description: '¿Sabías que eres mi mejor amigo?' },
    { src: foto50, description: 'Y con la primera persona que fui completamente yo' },
    { src: foto51, description: 'Gracias por cada fotito juntos' },
    { src: foto52, description: 'Y por cada sonrisa que es innevitable que no se me salga' },
    { src: foto53, description: 'De verdad no se que haría sin ti' },
    { src: foto54, description: 'Besito' },
    { src: foto55, description: 'Te amo tanto tanto tantisimo' },
    { src: foto56, description: 'Primer viaje de tu trabajito juntos' },
    { src: foto57, description: 'Una salidita al cine' },
    { src: foto58, description: 'Y otra al mall' },
    { src: foto59, description: 'Una fotito antes de los tacos de birria' },
    { src: foto60, description: 'Espero estar toda mi vida así, junto a ti' },
    { src: foto61, description: 'Gracias por acompañarme a cada lugar' },
    { src: foto62, description: 'Un añito celebrando junto a ti con nuestra comida fav' },
    { src: foto63, description: 'Que nunca me falten tus besos' },
    { src: foto64, description: 'El momento que mas miedo he tenido en mi vida' },
    { src: foto65, description: 'Tu papito no salemente te dio fuerzas a ti, también me las dio a mi' },
    { src: foto66, description: 'Yo te dije que no te tomaras el ensure' },
    { src: foto67, description: 'Una felicidad gigante de que Dios nos diera más tiempo juntos' },
    { src: foto68, description: 'Como dije....un hombre serio jaja' },
    { src: foto69, description: 'De mis fotitos favoritas a tu lado' },
    { src: foto70, description: 'Enamorada del chata' },
    { src: foto71, description: 'Gracias por hacer especial mi día, sos mi mayor regalo' },
    { src: foto72, description: 'No me podría cansar de tomarme fotitos contigo' },
    { src: foto73, description: 'Gracias por amarme sin maquillaje' },
    { src: foto74, description: 'Gracias por amar a mi familia' },
    { src: foto75, description: 'Espero seguir viajando a tu lado' },
    { src: foto76, description: 'He vivido tantas experiencias nuevas a tu lado' },
    { src: foto77, description: 'Una navidad más juntitos' },
    { src: foto78, description: 'Tal vez no estabamos en nuestro mejor momento, pero hemos llegado hasta aca juntos' },
    { src: foto79, description: 'Y llegamos a estar así de felices de nuevo, aunque fuera nuestra última noche viviendo juntos' },
    { src: foto80, description: 'Doy gracias a Dios por tu vida' },
    { src: foto81, description: 'Y aunque no somos tan buenos con las manualidades' },
    { src: foto82, description: 'Nuestra relación tomo un giro de 180 grados' },
    { src: foto83, description: 'Y ahí fue cuando necidimos...' },
    { src: foto84, description: 'Hacer bien las cosas' },
    { src: foto85, description: 'Fui la más feliz cuando me dijiste "soy salvo"' },
    { src: foto86, description: 'Y de ahí todo a ido en mejora' },
    { src: foto87, description: 'Y ahora sonries más jaja' },
    { src: foto88, description: 'Afortunada de celebrar un mes mas a tu lado' },
    { src: foto89, description: 'No es nuestra foto favorita pero se que estamos en un buen lugar' },
    { src: foto90, description: 'Mi novio me llevó a ver el amanecer en mi cumpleaños y fui demasiado feliz' },
    { src: foto91, description: 'Espero que te sigan gustando mis besos tanto como a mi me gustan los tuyos' },
    { src: foto92, description: 'Y que tus brazos siempre me guarden del frio jaja' },
    { src: foto93, description: 'Espero que seas tan feliz como yo lo soy' },
    { src: foto94, description: 'Y que sogamos llegando muy lejos juntos' },
    { src: foto95, description: 'Que sean mil fotitos más, mil aventuras mas, y mil años más, te amo mi amor' }

  ];

  // Estado para manejar la foto seleccionada
  const [selectedIndex, setSelectedIndex] = useState(null);

  // Manejar el clic en la foto para mostrar la descripción
  const handleClick = (index) => {
    setSelectedIndex(index === selectedIndex ? null : index); // Alternar la selección
  };

  return (
    <div className="gallery">
      <h3>Nuestras fotos</h3>
      <div className="photos">
        {/* Iterar sobre el array de fotos y generar las tarjetas */}
        {photos.map((photo, index) => (
          <div
            key={index}
            className={`photo-container ${selectedIndex === index ? 'flipped' : ''}`}
            onClick={() => handleClick(index)}
          >
            <img src={photo.src} alt={`Foto ${index + 1}`} />
            <div className="photo-overlay">
              <p>{photo.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;