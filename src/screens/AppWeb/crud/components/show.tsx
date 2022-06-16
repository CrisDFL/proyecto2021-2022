import React, { useState, useEffect, FC } from 'react';
import { Link } from 'react-router-dom';
import {
  collection, getDocs, getDoc, deleteDoc, doc,
} from 'firebase/firestore';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { Button } from '@mui/material';
import { db } from '../../../../utils/firebase';

const MySwal = withReactContent(Swal);

const Show: FC = () => {
  // 1. Configurar Hooks
  const [gestionClientes, setGestionClientes] = useState([]);

  // 2. Referenciando a la bd de firestore
  const gestionClientesCollection = collection(db, 'gestionClientes');

  // 3. Funcion para mostrar todos los docs
  const getGestionClientes = async () => {
    const data = await getDocs(gestionClientesCollection);
    // console.log(data.docs);
    setGestionClientes(
      data.docs.map((doc) => ({ ...doc.data(), id: doc.id })),
    );
    console.log(gestionClientes);
  };

  // 4. funcion para eliminar doc
  const deleteGestionClientes = async (id: string) => {
    const gestionClientesDoc = doc(db, 'gestionClientes', id);
    await deleteDoc(gestionClientesDoc);
    getGestionClientes();
  };
  // 5. funcion de confirmacion para Sweet Alert 2
  const confirmDelete = (id: string) => {
    
  };

  // 6. usamos useEffect
  useEffect(() => {
    getGestionClientes();
  }, []);
  // 7. retorno de vista del componente
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="d-grid" gap-2>
            <Link to="./Create" className="btn btn-secondary mt-2 mb-2" >Create</Link>
          </div>
          <table className="table table-dark table-hover">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Telefono/Celular</th>
                <th>Correo</th>
                <th>Acciones</th>
              </tr>
            </thead>

            <tbody>
              {gestionClientes.map((gestionCliente) => (
                <tr key={gestionCliente.id}>
                  <td>{gestionCliente.nombre}</td>
                  <td>{gestionCliente.tel}</td>
                  <td>{gestionCliente.correo}</td>
                  <td>
                    <Link to="./Edit" className="btn btn-light">Editar</Link>
                    <Button onClick={() => { deleteGestionClientes(gestionCliente.id); }} className="btn btn-danger" >Borrar</Button>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </div>
    </div>
  );
};

export default Show;
