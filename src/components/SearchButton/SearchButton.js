import s from './SearchButton.module.css';
import { useState } from 'react';
import { ReactComponent as SearchIcon } from '../../images/search.svg';

export default function SearchButton({ onClick }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      type="button"
      className={s.btn}
      onClick={onClick}
      onMouseOver={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <SearchIcon
        width="20px"
        height="20px"
        fill={isHovered ? '#ff6b08' : '#A6A6A6'}
      />
    </button>
  );
}
