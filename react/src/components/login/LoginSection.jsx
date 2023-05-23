import React, { useState } from 'react';
import {
  Decoracion1,
  Title1,
  Title2,
  Title3,
} from '../../styles/components/login/LoginStyle';
import { LoginForm } from './LoginForm';
import { RegisterForm } from './RegisterForm';

export const LoginSection = () => {
  const [changeForm, setChangeForm] = useState(false);

  const HndleChangeForm = () => {
    setChangeForm(!changeForm);
  };

  return (
    <>
      <div className="row mt-4 ms-5">
        <Title1 className="col-8 mb-4">Mi factura</Title1>
        <Title2
          className="col-12"
          src="https://firebasestorage.googleapis.com/v0/b/pruebas-a5f70.appspot.com/o/img-pruebas%2Ftitulo_login.png?alt=media&token=8f8fa88f-c4fc-4a1c-accd-cf7357fff4ad"
          alt=""
        />
        {changeForm ? <RegisterForm /> : <LoginForm />}
        <div className="row d-flex justify-content-center">
          <Title3 onClick={() => HndleChangeForm()} className="col-5 ms-5">
            {changeForm ? 'Ingresar' : 'Registrarme'}
          </Title3>
        </div>
      </div>
      <Decoracion1
        src="https://firebasestorage.googleapis.com/v0/b/pruebas-a5f70.appspot.com/o/img-pruebas%2Fdecoracion1_login.png?alt=media&token=4c0a1f61-d632-4d8c-b730-9682d6b99089"
        alt=""
      />
    </>
  );
};
