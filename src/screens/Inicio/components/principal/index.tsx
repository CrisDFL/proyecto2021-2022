import { FC } from 'react';
import './style.css';

const Principal: FC = () => (
  <div className="ContainerInicio">
    <main>
      <aside className="asideLeft">
        <h1 className="asideSubtitle">CONÓCENOS</h1>
        <p className="justify">
          Somos un criadero de mascotas dedicado a la hermosa raza de bulldog
          francés, ellos nos enamoraron y sabemos que contigo lo harán también.
          <br />
          <br />
          Estamos ubicados en el municipio de Cajicá, Cundinamarca, en un lugar
          bastante tranquilo y acogedor para nuestros amigos caninos.
          <br />
          <br />
          Nos esforzamos en brindarles el mejor servicio y compromiso a nuestros
          clientes, así como también un cariño y respeto a nuestros
          compañeros de cuatro patas.
        </p>
      </aside>
      <aside className="asideRight">
        <img src="/resources/img/principal/conoscanos.jpg" alt="" />
      </aside>
    </main>
  </div>
);

export default Principal;
