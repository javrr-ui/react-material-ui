import React from 'react';
import { useLocation } from 'react-router-dom';

function Home() {
  const location = useLocation();
  
  return (
    <div>

      <h1>Bienvenido a la página de inicio</h1>
      <p>Esta es la página principal</p>
     
    </div>
  );
}

export default Home;