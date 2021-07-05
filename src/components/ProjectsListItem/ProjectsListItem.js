// import react from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import s from './ProjectsListItem.module.css';

import DeleteButtonWhite from '../DeleteButtonWhite';
import projectsOperations from '../../redux/projects/projects-operations';

export default function ProjectsListItem({ id, title, description }) {
  const dispatch = useDispatch();

  const onDeleteProject = value =>
    dispatch(projectsOperations.deleteProject(value));

  return (
    <li className={s.listItem}>
      <Link to={`/projects/${id}`} className={s.link}>
        {title.length > 12 ? (
          <div className={s.longTitle}>{title}</div>
        ) : (
          <div className={s.title}>{title}</div>
        )}
        <div className={s.description}>{description}</div>
      </Link>
      <DeleteButtonWhite onDeleteProject={onDeleteProject} projectId={id} />
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
