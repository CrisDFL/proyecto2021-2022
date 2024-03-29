import { FC } from 'react';
import './style.css';
import HomeIcon from '@mui/icons-material/Home';
import InventoryIcon from '@mui/icons-material/Inventory';
import PetsIcon from '@mui/icons-material/Pets';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Button } from 'reactstrap';
import { getAuth, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Sidebar: FC = () => {
  const navigate = useNavigate();
  const auth = getAuth();
  const logOut = () => {
    signOut(auth).then(() => {
      navigate('/Login');
    }).catch((error) => {
      // An error happened.
    });
  };
  return (
    <label htmlFor="btn">
        <input type="checkbox" className="button" id="btn"/>
        <div className="slide bg-dark text-warning">
            <h3 className="titleSidebar text-center">Black and Yellow</h3>
            <hr className="linesSubtitles"/>
            <ul className="contentSidebar">
                <div className="gestionCrias">
                    <li>
                        <a href="./Crias">
                            <HomeIcon />
                            Gestión de Crías
                        </a>
                    </li>
                </div>
                <hr className="linesSubtitles"/>
                <div className="manejoProveedores">
                    <p className="subtitleProveedores">
                        Manejo de Proveedores
                    </p>
                    <li>
                        <a href="./Proveedores">
                            <InventoryIcon />
                            Proveedores
                        </a>
                    </li>
                    <li>
                        <a href="./Padrones">
                            <PetsIcon />
                            Compras Gerencia
                        </a>
                    </li>
                </div>
                <div className="manejoCompras">
                    <p className="subtitleProveedores">Manejo de Compras</p>
                    <li>
                        <a href="./Clientes">
                            <PeopleAltIcon />
                            Control de Clientes
                        </a>
                    </li>
                    <li>
                        <a href="./Responsables">
                            <VolunteerActivismIcon />
                            Control de Responsables
                        </a>
                    </li>
                    <li>
                        <a href="./Ventas">
                            <ShoppingCartIcon />
                            Ventas
                        </a>
                    </li>
                    <li className="containerLogout">
                        <Button className="bg-warning logout" onClick={() => logOut()}>Cerrar Sesión</Button>
                    </li>
                </div>
            </ul>
        </div>
    </label>
  );
};

export default Sidebar;
