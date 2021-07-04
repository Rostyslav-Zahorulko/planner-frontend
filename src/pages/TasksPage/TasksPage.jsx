import React, { useState, useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import st from './TasksPage.module.css';
// import tasks from '../../data/tasks.json';
import TasksList from '../../components/TasksList';
import TasksDatesNav from '../../components/TasksDatesNav';
import TasksSearch from '../../components/TasksSearchFull';
import SprintHeader from '../../components/SprintHeader';
import ChangeButton from '../../components/СhangeButton/ChangeButton';
import SidebarForReuse from '../../components/SidebarForReuse';
import SprintLinkList from '../../components/SprintLinkList';
import Modal from '../../components/Modal';

import FormCreateTask from '../../components/FormCreateTask';
import { getSprintItem } from '../../redux/tasks/tasks-selectors';
import FormCreateSprint from '../../components/FormCreateSprint';

import addTask from '../../redux/tasks/tasks-operations';
import ChartModalContainer from '../../components/ChartModal';

import sprints from '../../data/sprints.json';

import AddButton from '../../components/AddButton';

import Media from 'react-media';

export default function TasksPage() {
  const dispatch = useDispatch();

  const tasks = useSelector(getSprintItem);
  const [isShown, setIsShown] = useState(false);

  const toggleModal = useCallback(() => {
    setIsShown(prevIsShown => !prevIsShown);
  }, []);
  return (
    <div className={st.wrapper}>
      <SidebarForReuse goBackTo={'sprints'}>
        <SprintLinkList sprints={sprints} />
        {/* <FormCreateSprint /> */}
      </SidebarForReuse>
      <div className={st.wrapper_tasks}>
        <div className={st.headPanelWrapper}>
          <TasksDatesNav />
          {window.matchMedia('(max-width: 1279px)') && <TasksSearch />}
        </div>
        <div className={st.header}>
          <div className={st.title_wrapper}>
            <h1 className={st.title}>Sprint 1</h1>
            <ChangeButton />
          </div>
          <div className={st.button_wrapper}>
            <AddButton onClick={toggleModal} />
            <Media queries={{ big: { minWidth: 1280 } }}>
              {matches =>
                matches.big ? (
                  <p className={st.name_button}>Create a task</p>
                ) : (
                  ' '
                )
              }
            </Media>
          </div>
        </div>
        <SprintHeader />
        <TasksList tasks={tasks} />

        {isShown && (
          <Modal onClose={toggleModal}>
            <FormCreateTask />
          </Modal>
        )}
      </div>
      {/* {tasks.length > 3 ? <ChartModalContainer /> : ''} */}
      <ChartModalContainer />
    </div>
  );
}
