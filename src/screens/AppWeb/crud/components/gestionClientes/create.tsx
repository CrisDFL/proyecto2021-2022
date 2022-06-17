import { async } from '@firebase/util';
import { Button } from '@mui/material';
import { addDoc, collection } from 'firebase/firestore';
import React, { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '../../../../../utils/firebase';

const Create: FC = () => {
  const [nombre, setNombre] = useState('');
  const [tel, setTel] = useState('');
  const [correo, setCorreo] = useState('');
  const navigate = useNavigate();

  const gestionClientesCollection = collection(db, 'gestionClientes');

  const store = async (e: any) => {
    e.preventDefault();
    await addDoc(gestionClientesCollection, { nombre, tel, correo });
    navigate('/Create');
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>Create</h1>
          <form onSubmit={store}>
            <div className="mb-3">
              <label htmlFor="." className="form-label">
                <p className="text-light">Nombre</p>
                <input type="text"value={nombre} className="form-control" onChange={(e) => setNombre(e.target.value)} />
              </label>
            </div>
            <div className="mb-3">
              <label htmlFor="." className="form-label">
              <p className="text-light">Telefono / Celular</p>
                <input type="text"value={tel} className="form-control" onChange={(e) => setTel(e.target.value)} />
              </label>
            </div>
            <div className="mb-3">
              <label htmlFor="." className="form-label">
                <p className="text-light">Correo</p>
                <input type="text"value={correo} className="form-control" onChange={(e) => setCorreo(e.target.value)} />
              </label>
            </div>
          </form>
          <Button onClick={store}>Crear</Button>
        </div>
      </div>
    </div>
  );
};

export default Create;
