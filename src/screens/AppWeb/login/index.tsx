import { FC, useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import './style.css';
import Crud from '../crud';
import FirebaseApp from '../../../firebase/firebaseConfig';

const Login: FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const auth = getAuth(FirebaseApp);
  // const iniciar = () => {
  //   signInWithEmailAndPassword(auth, email, password)
  //     .then((userCredential) => {
  //       const { user } = userCredential;
  //       console.log('Inicio sesion exitoso: ', user.email, password);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  return (
    <div className="loginPage">
        <div className="login">
            <img className="imagen" src="/resources/img/header/logo.png" alt="logo de inicio de sesion" />
            <h1>Inicio de Sesion</h1>
            <form>
                <label htmlFor="correo">
                    Correo
                    <input id="correo" type="email" name="correo" required placeholder="Correo" onChange={(ev) => setEmail(ev.target.value)}/>
                </label>
                <label htmlFor="contraseña">
                    Contraseña
                    <input id="contraseña" type="password" name="contraseña" required placeholder="Contraseña" onChange={(ev) => setPassword(ev.target.value)}/>
                </label>
                <input name="btniniciar" type="submit" value="Iniciar Sesion" />
                <a href=".">Olvido su contraseña?</a>
                <a className="n_tiene" href=".">No tiene cuenta?</a>
                <br />
                <a id="regresar" href=".">Regresar</a>
            </form>
        </div>
    </div>
  );
};

export default Login;
