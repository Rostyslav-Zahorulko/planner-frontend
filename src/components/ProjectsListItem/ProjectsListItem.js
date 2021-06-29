// import react from 'react';
// import { NavLink } from 'react-router-dom';
import s from './ProjectsListItem.module.css';

import DeleteButtonWhite from '../DeleteButtonWhite';

export default function ProjectsListItem({ id, title, description }) {
  return (
    <li className={s.listItem}>
      {/* <NavLink to={`/projects/${id}`}> */}
      {title.length > 12 ? (
        <div className={s.longTitle}>{title}</div>
      ) : (
        <div className={s.title}>{title}</div>
      )}
      <div className={s.description}>{description}</div>
      {/* </NavLink> */}
      <DeleteButtonWhite />
    </li>
  );
}

// ДЛЯ РАНДОМНОГО ВЫБОРА ЦВЕТА ПРОЕКТА (ВСТАВИТЬ В КОМПОНЕНТ)
// const [color, setColor] = useState(undefined);
// const colorsClassNames = ['purple', 'coral', 'green'];

// useEffect(() => {
//   getRandomColor();
//   console.log(color);
// });

// function getRandomColor() {
//   if (!color) {
//     const colorIndex = randomInteger(0, 2);
//     console.log(colorIndex);
//     setColor(colorsClassNames[colorIndex]);
//   }
// }

// function randomInteger(min, max) {
//   let rand = min + Math.random() * (max + 1 - min);
//   return Math.floor(rand);
// }
// ВСТАВИТЬ В REtUrN
// {/* <li className={`${s.listItem} ${s[color]}`}> */}
