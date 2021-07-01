import styles from './ProjectLinkListItem.module.css';

const ProjectLinkListItem = project => (
  <li className={styles.list_item}>
    <a className={styles.link_list_item} href={`/projects/${project.id}`}>
      <span className={styles.link_list_item_sp}>test1{project.title} </span>
      {/* </NavLink> */}
    </a>
    {/* <NavLink to={`/projects/${id}`}> */}
    {/* </NavLink> */}
  </li>
);
export default ProjectLinkListItem;
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
