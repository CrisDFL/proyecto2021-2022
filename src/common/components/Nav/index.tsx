import { FC } from 'react';
import './style.css';

const Nav: FC = () => (
  <nav className="navbar navbar-expand-lg ">
    <label htmlFor="btn">

    <input type="checkbox" className="button" id="btn"/>
        <div className="toggle">
            <span className="top_line common"></span>
            <span className="middle_line common"></span>
            <span className="bottom_line common"></span>
        </div>
    <span className="logo">
      BLACK AND YELLOW
    </span>
    <ul>
      <li><a className="active" href=".">Inicio</a></li>
      <li><a href=".">Galeria</a></li>
      <li><a href=".">Contactanos</a></li>
      <li><a href=".">Iniciar Sesion</a></li>
    </ul>
    </label>
  </nav>
);

export default Nav;
