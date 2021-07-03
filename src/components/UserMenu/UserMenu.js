import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { authOperations } from '../../redux/auth';

import s from './UserMenu.module.css';

const { logOut } = authOperations;

export default function UserMenu({ email }) {
  const dispatch = useDispatch();

  const onLogout = useCallback(() => {
    dispatch(logOut());
  }, [dispatch]);

  return (
    <div className={s.userMenu}>
      <span className={s.userName}>{email}</span>
      <button type="button" className={s.logOutBtn} onClick={onLogout}>
        Log out
      </button>
    </div>
  );
}
