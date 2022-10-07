import { FC, useRef } from 'react';
import emailjs from 'emailjs-com';
import Footer from '../../common/components/Footer';
import Header from '../../common/components/Header';
import Nav from '../../common/components/Nav';
import './style.css';

const Contactanos: FC = () => {
  const form = useRef<any>();
  const enviarEmail = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    emailjs.sendForm('service_qad5kne', 'template_jzc2uf3', form.current, 'sKj_RhuQCsrlyhT5h').then(() => {
      alert('Se ha enviado correctamente.');
    });
  };

  return (
  <div className="contactanosContainer">
    <Nav />
    <Header />
    <div className="containerContactanos">
      <form action="POST" className="form" onSubmit={enviarEmail} ref={form}>
        <div className="form-header">
          <h1 className="form-title">
            <span>Contactanos</span>
          </h1>
        </div>
        <label htmlFor="nombre" className="form-label">
          Nombre:
          <input
            type="text"
            id="nombre"
            name="nombre"
            className="form-input"
            placeholder="Escriba su Nombre"
          />
        </label>
        <label htmlFor="apellido" className="form-label">
          Apellido:
          <input
            type="text"
            id="apellido"
            name="apellido"
            className="form-input"
            placeholder="Escriba su Apellido"
          />
        </label>
        <label htmlFor="email" className="form-label">
          Correo Electronico:
          <input
            type="email"
            id="email"
            name="email"
            className="form-input"
            placeholder="Escriba su Correo Electronico"
          />
        </label>
        <label htmlFor="mensaje" className="form-label">
          Mensaje:
          <textarea
            id="mensaje"
            name="mensaje"
            className="form-textarea"
            placeholder="Escriba su Mensaje"
          />
        </label>

        <input type="submit" className="btn-submit" value="Enviar" />
      </form>
    </div>
    <Footer />
  </div>
  );
};

export default Contactanos;
