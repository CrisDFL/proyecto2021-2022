import { FC } from 'react';
import './style.css';

const Sidebar: FC = () => (
    <label htmlFor="btn">
        <input type="checkbox" className="button" id="btn"/>
        <div className="toggle">
            <span className="top_line common"></span>
            <span className="middle_line common"></span>
            <span className="bottom_line common"></span>
        </div>
        <div className="slide">
            <h1 className="titleSidebar">Menu</h1>
            <ul className="contentSidebar">
                <li><a href=".">dashboard</a></li>
                <li><a href=".">dashboard</a></li>
                <li><a href=".">dashboard</a></li>
                <li><a href=".">dashboard</a></li>
                <li><a href=".">dashboard</a></li>
            </ul>
        </div>
    </label>
);

export default Sidebar;
