import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Create from '../screens/AppWeb/crud/components/gestionClientes/create';
import Edit from '../screens/AppWeb/crud/components/gestionClientes/edit';
import Show from '../screens/AppWeb/crud/components/gestionClientes/show';
import Main from '../screens/AppWeb/crud/dashboard/main/Main';
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
      <Route path="/Main" element={<Main />} />
      <Route path="/Crud" element={<Show />} />
      <Route path="/Create" element={<Create />} />
      <Route path="/Edit/:id" element={<Edit />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
