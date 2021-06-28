import { Link } from 'react-router-dom';
import UserMenu from '../UserMenu';

import logo from '../../images/logo.svg';
import s from './AppBar.module.css';

export default function AppBar({ isLoggedIn }) {
  return (
    <header className={s.header}>
      <Link to="/">
        <img src={logo} className={s.logo} alt={logo}></img>
      </Link>

      {isLoggedIn ? <UserMenu /> : null}
    </header>
  );
}
