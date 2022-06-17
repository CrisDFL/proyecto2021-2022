import React, { FC, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getDoc, updateDoc, doc } from 'firebase/firestore';
import { async } from '@firebase/util';
import { Button } from '@mui/material';
import { db } from '../../../../../utils/firebase';

const Edit: FC = () => {
  const [nombre, setNombre] = useState('');
  const [tel, setTel] = useState('');
  const [correo, setCorreo] = useState('');

  const navigate = useNavigate();
  const { id } = useParams();

  const update = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const gestionCliente = doc(db, 'gestionClientes', id);
    const data = { nombre, tel, correo };
    await updateDoc(gestionCliente, data);
    navigate('/Crud');
  };

  const getGestionClientesById = async (id: any) => {
    const gestionCliente = await getDoc(doc(db, 'gestionClientes', id));

    if (gestionCliente.exists()) {
      // console.log(gestionCliente.data());
      setNombre(gestionCliente.data().nombre);
      setTel(gestionCliente.data().tel);
      setCorreo(gestionCliente.data().correo);
    } else {
      // console.log('producto no existe');
    }
  };

  useEffect(() => {
    getGestionClientesById(id);
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>Edit</h1>
          <form onSubmit={update}>
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
          <Button onClick={update}>Crear</Button>
        </div>
      </div>
    </div>
  );
};

export default Edit;
