import { ReactComponent as LogoutIcon } from '../../images/logout.svg';

import styles from './LogoutButton.module.css';

export default function AddButton({ onLogout }) {
  return (
    <button type="button" className={styles.button} onClick={onLogout}>
      <div className={styles.iconWrapper}>
        <LogoutIcon className={styles.icon} />
      </div>

      <span className={styles.text}>Log Out</span>
    </button>
  );
}
