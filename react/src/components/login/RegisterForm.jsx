import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  ButtonLogin,
  InputLogin,
} from '../../styles/components/login/LoginStyle';
import { AuthContext } from '../../context/AppContext';
export const RegisterForm = () => {
  const { register } = useContext(AuthContext);
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await register(name, username, password);
      const isLoggedIn = localStorage.getItem('isLoggedIn');
      if (isLoggedIn === 'true') {
        window.location.reload();
      } else {
        alert('registro fallido');
      }
    } catch (error) {
      alert(`Error en el inicio de sesión: ${error.message}`);
    }
  };

  return (
    <>
      <form onSubmit={handleRegister} className="row col-8 mt-3">
        <div className="row d-flex justify-content-center m-4 mt-5">
          <InputLogin
            className="col-4"
            type="text"
            name="name"
            id=""
            placeholder="nombre"
            required
            value={name}
            onChange={(e) => setName(e.target.value.toLowerCase())}
          />
        </div>
        <div className="row d-flex justify-content-center m-4 mt-1">
          <InputLogin
            className="col-4"
            type="text"
            name="username"
            id=""
            placeholder="email"
            required
            title="el correo debe tener el formato correcto"
            value={username}
            onChange={(e) => setUsername(e.target.value.toLowerCase())}
          />
        </div>
        <div className="row d-flex justify-content-center m-4 mt-1">
          <InputLogin
            className="col-4"
            type="password"
            name="password"
            id=""
            placeholder="contraseña"
            pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
            required
            title="La contraseña debe tener al menos una letra, un número y una longitud mínima de 8 caracteres."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="row d-flex justify-content-center m-4 mt-2">
          <ButtonLogin type="">Registrarme</ButtonLogin>
        </div>
      </form>
    </>
  );
};
