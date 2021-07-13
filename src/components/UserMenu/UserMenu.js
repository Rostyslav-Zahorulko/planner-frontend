import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import LogoutButton from '../LogoutButton';

import s from './UserMenu.module.css';

import { authOperations } from '../../redux/auth';

const { logOut } = authOperations;

export default function UserMenu({ email }) {
  const dispatch = useDispatch();

  const onLogout = useCallback(() => {
    dispatch(logOut());
  }, [dispatch]);

  return (
    <div className={s.userMenu}>
      <span className={s.userName}>{email}</span>

      <LogoutButton onLogout={onLogout} />

      {/* <span className={s.text}>Log Out</span> */}
    </div>
  );
}
