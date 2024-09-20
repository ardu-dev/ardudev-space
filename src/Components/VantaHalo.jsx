// VantaHalo.js
import React, { useEffect, useRef } from 'react';
import HALO from 'vanta/dist/vanta.halo.min'; // Importa la animación HALO
import * as THREE from 'three'; // Importa Three.js

function VantaHalo() {
  const vantaRef = useRef(null); // Referencia al div que contendrá el fondo animado

  useEffect(() => {
    const vantaEffect = HALO({
      el: vantaRef.current, // Elemento donde se renderizará el efecto
      THREE, // Necesitas pasar Three.js
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      baseColor: 0x5200f2,
      backgroundColor: 0x3032f,
      amplitudeFactor: 1.20,
      size: 0.50,
    });

    // Limpiar el efecto cuando el componente se desmonta
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);

  return (
    <div
      ref={vantaRef}
      style={{
        position: 'fixed', // Asegúrate de que sea fijo para que ocupe todo el fondo
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1, // Poner el fondo detrás de otros elementos
      }}
    ></div>
  );
}

export default VantaHalo;
