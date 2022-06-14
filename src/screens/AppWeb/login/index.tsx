import { FC, useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import './style.css';
import { Button } from '@mui/material';
import { logEvent } from '@firebase/analytics';
import { useNavigate } from 'react-router-dom';
import { analytics } from '../../../utils/firebase';

const Login: FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const auth = getAuth();
  const iniciar = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const { user } = userCredential;
        navigate('./Crud');
        console.log('Inicio sesion exitoso: ', user.email, password);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="loginPage">
      <div className="login">
        <img
          className="imagen"
          src="/resources/img/header/logo.png"
          alt="logo de inicio de sesion"
        />
        <h1>Inicio de Sesion</h1>
        <form>
          <label htmlFor="correo">
            Correo
            <input
              id="correo"
              type="email"
              name="correo"
              required
              placeholder="Correo"
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label htmlFor="contraseña">
            Contraseña
            <input
              id="contraseña"
              type="password"
              name="contraseña"
              required
              placeholder="Contraseña"
              onChange={(e) => {
                setPassword(e.target.value);
                logEvent(analytics, 'laboratory');
              }}
            />
          </label>
          <div className="containerButton">
            <Button
              className="buttonLogin"
              onClick={() => {
                iniciar();
                logEvent(analytics, 'login');
              }}>
              Iniciar Sesion
            </Button>
          </div>
          <br />
          <a id="regresar" href=".">
            Regresar
          </a>
        </form>
      </div>
    </div>
  );
};

export default Login;
