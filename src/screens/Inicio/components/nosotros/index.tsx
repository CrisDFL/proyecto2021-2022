import { FC } from 'react';
import './style.css';

const Nosotros: FC = () => (
        <div className="contentNosotros">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#000" fillOpacity="1" d="M0,96L48,122.7C96,149,192,203,288,186.7C384,171,480,85,576,90.7C672,96,768,192,864,197.3C960,203,1056,117,1152,96C1248,75,1344,117,1392,138.7L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
            <div className="containNosotros">
                <h2 className="titleNosotros">Nosotros</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, repellat vero porro eaque cupiditate fugit suscipit placeat officia id tempora, atque minima, doloremque dolore cum voluptatibus voluptate exercitationem obcaecati nemo!</p>
            </div>
        </div>
);

export default Nosotros;
