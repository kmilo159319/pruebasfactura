import React from 'react';
import axios from 'axios';
import { ButtonMenu } from '../../styles/components/layouts/Main';

export const Nav = () => {
  const handleLogout = async () => {
    try {
      const token = localStorage.getItem('Token');

      // Realizar solicitud de logout a la API
      const response = await axios.post(
        'http://localhost:8000/api/logout',
        null,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Eliminar los valores del localStorage
      localStorage.removeItem('STATE_KEY');
      localStorage.removeItem('Token');
      localStorage.removeItem('isLoggedIn');
      localStorage.removeItem('username');

      window.location.reload();
      // Redireccionar o realizar cualquier otra acción después del logout
      // ...
    } catch (error) {
      console.log('Error en el logout:', error);
    }
  };

  return (
    <>
      <div>
        <ButtonMenu className="nav-link me-5" onClick={handleLogout}>
          salir
        </ButtonMenu>
      </div>
    </>
  );
};
