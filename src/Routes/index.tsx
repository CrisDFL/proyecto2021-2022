import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Crud from '../screens/AppWeb/crud';
import Login from '../screens/AppWeb/login';
import Contactanos from '../screens/Contactanos';
import Galeria from '../screens/Galeria';
import Inicio from '../screens/Inicio';

const Router: FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="Galeria" element={<Galeria />} />
      <Route path="Contactanos" element={<Contactanos />} />
      <Route path="Login" element={<Login />} />
      <Route path="Crud" element={<Crud />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
