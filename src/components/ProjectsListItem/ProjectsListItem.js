import s from './ProjectsListItem.module.css';

export default function ProjectsListItem({ id, title, description }) {
  return (
    <li className={s.listItem}>
      <div className={s.title}>{title}</div>
      {/* <div className={s.description}>{description}</div> */}
    </li>
  );
}
