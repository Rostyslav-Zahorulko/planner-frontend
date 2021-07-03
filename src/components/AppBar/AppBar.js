import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { authSelectors } from '../../redux/auth';

import UserMenu from '../UserMenu';

import s from './AppBar.module.css';

import logo from '../../images/logo.svg';

const { getIsLoggedIn, getEmail } = authSelectors;

export default function AppBar() {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const email = useSelector(getEmail);

  return (
    <header className={s.header}>
      <Link to="/">
        <img src={logo} className={s.logo} alt={logo}></img>
      </Link>

      {isLoggedIn ? <UserMenu email={email} /> : null}
    </header>
  );
}
