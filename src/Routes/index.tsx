import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Tables from '../screens/AppWeb/crud/components';
import Create from '../screens/AppWeb/crud/components/gestionClientes/create';
import Edit from '../screens/AppWeb/crud/components/gestionClientes/edit';
import Show from '../screens/AppWeb/crud/components/gestionClientes/show';
import Login from '../screens/AppWeb/login';
import Contactanos from '../screens/Contactanos';
import Galeria from '../screens/Galeria';
import Inicio from '../screens/Inicio';

const Router: FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/Galeria" element={<Galeria />} />
      <Route path="/Contactanos" element={<Contactanos />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Tables" element={<Tables />} />
      <Route path="/Crud" element={<Show />} />
      <Route path="/Create" element={<Create />} />
      <Route path="/Edit/:id" element={<Edit />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
