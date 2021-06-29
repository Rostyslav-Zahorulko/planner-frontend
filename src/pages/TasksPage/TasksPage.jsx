import React from 'react';
import st from './TasksPage.module.css';
import tasks from '../../data/tasks.json';
import TasksList from '../../components/TasksList';
import SprintHeader from '../../components/SprintHeader';

import AddButton from '../../components/AddButton';

export default function TasksPage() {
  return (
    <>
      <div className={st.date}>
        <span className={st.date_left}></span>
        <p className={st.date_sprint}>
          1/
          <span>10 </span>
          <span className={st.date_right}> </span>
          <span>08.08.2020</span>
        </p>
      </div>
      <div className={st.header}>
        <div className={st.title_wrapper}>
          <h1 className={st.title}>Sprint 1</h1>
          <button className={st.button_edit}></button>
        </div>
        <div className={st.button_wrapper}>
          <AddButton />
          <p className={st.name_button}>Створити задачу</p>
        </div>
      </div>
      <SprintHeader />
      <TasksList tasks={tasks} />
    </>
  );
}
