// import style from './Menu.module.css';
import { Link } from 'react-router-dom';
import './menu.css';

export function Menu({ menuOptions }: { menuOptions: Array<any> }) {
    return (
        <nav className="menu">
            <ul>
                {menuOptions.map((item) => (
                    <li key={item.label}>
                        <Link to={item.path}>{item.label}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
