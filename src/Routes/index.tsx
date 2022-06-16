import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Create from '../screens/AppWeb/crud/components/create';
import Edit from '../screens/AppWeb/crud/components/edit';
import Show from '../screens/AppWeb/crud/components/show';
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
      <Route path="Login/Crud" element={<Show />} />
      <Route path="Login/Crud/Create" element={<Create />} />
      <Route path="Login/Crud/Edit" element={<Edit />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
