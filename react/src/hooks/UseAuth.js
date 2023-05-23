import { useState, useEffect } from 'react';
import axios from 'axios';

export const UseAuth = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [token, setToken] = useState('');

  useEffect(() => {
    // Verificar si hay una sesión de usuario almacenada en el almacenamiento local
    const storedIsLoggedIn = localStorage.getItem('isLoggedIn');
    const storedUsername = localStorage.getItem('username');
    const storedToken = localStorage.getItem('Token');

    if (storedIsLoggedIn && storedUsername && storedToken) {
      setLoggedIn(true);
      setUsername(storedUsername);
      setToken(storedToken);
    }
  }, []);

  const login = async (username, password) => {
    //lógica de inicio de sesión

    try {
      const data = {
        email: username,
        password: password,
      };

      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      // se realiza la solicitud a la API para obtener el token de acceso
      const response = await axios.post(
        'http://localhost:8000/api/login',
        data,
        config
      );

      // Extraer el token de la respuesta de la API
      const { access_token } = response.data;

      // Actualizar el estado isLoggedIn y setUsername

      // Guardar el estado de sesión en el almacenamiento local
      localStorage.setItem('isLoggedIn', true);
      localStorage.setItem('username', username);
      localStorage.setItem('Token', access_token);
    } catch (error) {
      // Manejar cualquier error que ocurra durante la solicitud
      if (error.response) {
        // El servidor ha respondido con un código de estado de error
        console.error(
          'Error en la solicitud de inicio de sesión:',
          error.response.status
        );
        return error.response.data;
      } else if (error.request) {
        // La solicitud se ha realizado pero no se ha recibido respuesta
        console.log('No se recibió respuesta del servidor');
      } else {
        // Ocurrió un error al configurar la solicitud
        console.log('Error al configurar la solicitud:', error.message);
      }
      return Promise.reject(error);
    }
  };

  const register = async (name, username, password) => {
    //lógica de inicio de sesión

    try {
      const data = {
        name: name,
        email: username,
        password: password,
      };

      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      // se realiza la solicitud a la API para obtener el token de acceso
      const response = await axios.post(
        'http://localhost:8000/api/register',
        data,
        config
      );

      // Extraer el token de la respuesta de la API
      const { access_token } = response.data;

      // Guardar el estado de sesión en el almacenamiento local
      localStorage.setItem('isLoggedIn', true);
      localStorage.setItem('username', username);
      localStorage.setItem('Token', access_token);
    } catch (error) {
      // Manejar cualquier error que ocurra durante la solicitud
      if (error.response) {
        // El servidor ha respondido con un código de estado de error
        console.error(
          'Error en la solicitud de inicio de sesión:',
          error.response.status
        );
        console.error('Mensaje de error:', error.response.data);
        return error.response.data;
      } else if (error.request) {
        // La solicitud se ha realizado pero no se ha recibido respuesta
        console.error('No se recibió respuesta del servidor');
      } else {
        // Ocurrió un error al configurar la solicitud
        console.error('Error al configurar la solicitud:', error.message);
      }
      return error.message;
    }
  };

  const logout = () => {
    // Realizar la lógica de cierre de sesión

    // Actualizar el estado isLoggedIn y setUsername a sus valores iniciales

    // Eliminar el estado de sesión del almacenamiento local
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('username');
    localStorage.removeItem('Token');
  };

  return { isLoggedIn, username, login, logout, register };
};
