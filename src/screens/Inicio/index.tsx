import { FC } from 'react';
import Footer from '../../common/components/Footer';
import Header from '../../common/components/Header';
import Nav from '../../common/components/Nav';
import Nosotros from './components/nosotros';
import Principal from './components/principal';
import Slice from './components/slice';
import './style.css';

const Inicio: FC = () => (
  <div className="containerInicio">
    <Nav />
    <Header />
    <Principal />
    <Slice />
    <Nosotros />
    <Footer />
    </div>
);

export default Inicio;
