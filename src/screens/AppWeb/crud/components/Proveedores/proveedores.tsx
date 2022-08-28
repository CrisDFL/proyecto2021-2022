import {
  addDoc, collection, deleteDoc, doc, getDocs,
} from 'firebase/firestore';
import { FC, useEffect, useState } from 'react';
import { Button } from 'reactstrap';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { db } from '../../../../../utils/firebase';

const MySwal = withReactContent(Swal);

const Proveedores: FC = () => {
  const [nombre, setNombre] = useState('');
  const [nit, setNit] = useState('');
  const [telCel, setTelCel] = useState('');
  const [correo, setCorreo] = useState('');
  const [proveedores, setProveedores] = useState([]);

  const agregar = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    if (!nombre.trim()) {
    //   console.log('Esta vacio');
    }
    try {
      const data = await addDoc(collection(db, 'proveedor'), {
        nom_pro: nombre,
        nit_pro: nit,
        telCel_pro: telCel,
        correo_pro: correo,
      });
      setProveedores([
        ...proveedores,
        {
          id: data.id,
          ...data,
        },
      ]);
      console.log(setProveedores);
    } catch (error) {
    //   console.log(error);
    }
    setNombre('');
    setNit('');
    setTelCel('');
    setCorreo('');
  };

  const getDatos = async () => {
    const data = await getDocs(collection(db, 'proveedor'));
    //   console.log(data.docs);
    const arrayData = data.docs.map((docData) => ({
      id: docData.id,
      ...docData.data(),
    }));
    //   console.log(arrayData);
    setProveedores(arrayData);
  };
  useEffect(() => {
    getDatos();
  }, []);

  const eliminar = async (id: string) => {
    await deleteDoc(doc(db, 'proveedor', id));
    getDatos();
  };
  const confirmDelete = (id: string) => {
    MySwal.fire({
      title: 'Estas seguro?',
      text: '¡No podrás revertir esto!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '¡Sí, bórralo!',
    }).then((result: { isConfirmed: any; }) => {
      if (result.isConfirmed) {
        eliminar(id);
        Swal.fire(
          'Eliminado!',
          'Su dato ha sido eliminado con éxito.',
          'success',
        );
      }
    });
  };

  return (
    <div className="container">
        <h1 className="text-center mt-3">CRUD PROVEEDORES</h1>
        <hr />
        <div className="row">
            <div className="col-8">
                <table className="table table-dark table-hover">
                    <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Nit</th>
                        <th>tel/Cel</th>
                        <th>Correo</th>
                        <th>Acciones</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            proveedores.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.nom_pro}</td>
                                    <td>{item.nit_pro}</td>
                                    <td>{item.telCel_pro}</td>
                                    <td>{item.correo_pro}</td>
                                    <td>
                                        <Button className="btn btn-warning btn-small float-right">Editar</Button>
                                        <Button className="btn btn-danger btn-small float-rigth mx-2" onClick={() => confirmDelete(item.id)}>Borrar</Button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            <div className="col-4">
                <h4 className="text-center">Formulario</h4>
                <form onSubmit={agregar}>
                    <input
                        type="text"
                        className="form-control mb-2"
                        placeholder="Nombre del Proveedor"
                        onChange={(e) => setNombre(e.target.value)}
                        value={nombre}
                    />
                    <input
                        type="text"
                        className="form-control mb-2"
                        placeholder="Nit del Proveedor"
                        onChange={(e) => setNit(e.target.value)}
                        value={nit}
                    />
                    <input
                        type="text"
                        className="form-control mb-2"
                        placeholder="Tel/Cel del Proveedor"
                        onChange={(e) => setTelCel(e.target.value)}
                        value={telCel}
                    />
                    <input
                        type="text"
                        className="form-control mb-2"
                        placeholder="Correo del Proveedor"
                        onChange={(e) => setCorreo(e.target.value)}
                        value={correo}
                    />
                    <Button className="btn btn-dark btn-block">Agregar</Button>
                </form>
            </div>
        </div>
    </div>
  );
};

export default Proveedores;