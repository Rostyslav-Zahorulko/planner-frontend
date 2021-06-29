import s from './UserMenu.module.css';

export default function UserMenu() {
  return (
    <div className={s.userMenu}>
      <>
        <span className={s.userName}>Username</span>
        <button
          type="button"
          className={s.logOutBtn}
          onClick={() => console.log('Click')}
        >
          Log out
        </button>
      </>
    </div>
  );
}
