import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Proveedores from '../screens/AppWeb/crud/components/Proveedores/proveedores';
import Sidebar from '../screens/AppWeb/crud/dashboard';
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
      <Route path="/Main" element={<Sidebar />} />
      <Route path="/Crud" element={<Proveedores />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
