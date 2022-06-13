import { FC, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import db from '../../../firebase/firebaseConfig';

const Crud: FC = () => {
  useEffect(() => {
    const obtenerDatos = async () => {
      const datos = await getDocs(collection(db, 'usuarios'));
      console.log(datos.docs);
    };
    obtenerDatos();
  }, []);

  return (
    <h1>hola</h1>
  );
};

export default Crud;
