import { FC, useState } from 'react';
import './style.css';

const Nav: FC = () => {
  const [active, setActive] = useState('nav__menu');
  const [icon, setIcon] = useState('nav__toggler');
  const navToggle = () => {
    if (active === 'nav__menu') {
      setActive('nav__menu nav__active');
    } else setActive('nav__menu');

    // Icon Toggler
    if (icon === 'nav__toggler') {
      setIcon('nav__toggler toggle');
    } else setIcon('nav__toggler');
  };
  return (
    <nav className="nav navbar navbar-expand-lg bg-dark">
      <ul className={active}>
        <li className="nav__item">
          <a href="/" className="nav__link">
            Inicio
          </a>
        </li>
        <li className="nav__item">
          <a href="./Galeria" className="nav__link">
            Galería
          </a>
        </li>
        <li className="nav__item">
          <a href="./Contactanos" className="nav__link">
            Contáctanos
          </a>
        </li>
        <li>
          <a href="./Login" className="nav__login">
            Iniciar Sesión
          </a>
        </li>
      </ul>
      <div className="d-flex align-items-center">
        <span className="text-white subtitle">BLACK AND YELLOW</span>
        <img
          src="/resources/img/header/logo.png"
          width="50px"
          height="50px"
          alt="logo"
        />
      </div>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
};

export default Nav;
