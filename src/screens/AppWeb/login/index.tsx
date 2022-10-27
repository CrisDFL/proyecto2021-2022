import { FC, useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import './style.css';
import { Button } from '@mui/material';
import { logEvent } from '@firebase/analytics';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { useNavigate } from 'react-router-dom';
import { analytics } from '../../../utils/firebase';

const Login: FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const MySwal = withReactContent(Swal);
  const auth = getAuth();
  const iniciar = () => {
    const Toast = MySwal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
      },
    });
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        navigate('/Crud/Crias');
        Toast.fire({
          icon: 'success',
          title: 'Inicio de sesión éxitoso!',
        });
      })
      .catch(() => {
        Toast.fire({
          icon: 'error',
          title: 'Datos Erroneos',
        });
      });
  };

  history.pushState(null, location.href);
  window.onpopstate = () => {
    history.go(1);
  };

  return (
    <div className="loginPage">
      <div className="login">
        <img
          className="imagen"
          src="/resources/img/header/logo.png"
          alt="logo de inicio de sesion" />
        <h1>Inicio de Sesión</h1>
        <form>
          <label htmlFor="correo">
            Correo
            <input
              id="correo"
              type="email"
              name="correo"
              required
              placeholder="Correo"
              onChange={(e) => setEmail(e.target.value)} />
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
              } } />
          </label>
          <div className="containerButton">
            <Button
              className="buttonLogin"
              onClick={() => {
                iniciar();
                logEvent(analytics, 'login');
              } }>
              Iniciar Sesión
            </Button>
          </div>
          <br />
          <a id="regresar" href="/">
            Regresar
          </a>
        </form>
      </div>
    </div>
  );
};

export default Login;
