import React, { useState } from 'react';
import st from './TasksPage.module.css';
import tasks from '../../data/tasks.json';
import TasksList from '../../components/TasksList';
import TasksDatesNav from '../../components/TasksDatesNav';
import TasksSearch from '../../components/TasksSearchFull';
import SprintHeader from '../../components/SprintHeader';
import ChangeButton from '../../components/СhangeButton/ChangeButton';
import SidebarForReuse from '../../components/SidebarForReuse';
import SprintLinkList from '../../components/SprintLinkList';
import Modal from '../../components/Modal';
import addTask from '../../redux/tasks/tasks-operations';

import sprints from '../../data/sprints.json';

import AddButton from '../../components/AddButton';

import Media from 'react-media';

export default function TasksPage() {
  const [showModal, setshowModal] = useState(false);
  const handleCancelModal = () => {
    setshowModal(false);
  };

  const handleCreateModal = () => {
    setshowModal(true);
  };

  return (
    // <>
    //   <div className={st.headPanelWrapper}>
    //     <TasksDatesNav />
    //     {window.matchMedia('(max-width: 1279px)') && <TasksSearch />}
    //   </div>
    //   <div className={st.header}>
    //     <div className={st.title_wrapper}>
    //       <h1 className={st.title}>Sprint 1</h1>
    //       {/* <button className={st.button_edit}></button> */}
    //       <ChangeButton />
    //     </div>
    //     <div className={st.header}>
    //       <div className={st.title_wrapper}>
    //         <h1 className={st.title}>Sprint 1</h1>
    //         {/* <button className={st.button_edit}></button> */}
    //         <ChangeButton />
    //       </div>
    //       <div className={st.button_wrapper}>
    //         <AddButton createModal={handleCreateModal} />
    //         <Media queries={{ big: { minWidth: 1280 } }}>
    //           {matches =>
    //             matches.big ? (
    //               <p className={st.name_button}>Create a task</p>
    //             ) : (
    //               ' '
    //             )
    //           }
    //         </Media>
    //       </div>
    //     </div>
    //     <SprintHeader />
    //     <TasksList tasks={tasks} />
    //     {showModal && <Modal onClose={handleCancelModal} />}
    //   </div>
    // </>

    <div className={st.wrapper}>
      <SidebarForReuse goBackTo={'sprints'}>
        <SprintLinkList sprints={sprints} />
      </SidebarForReuse>
      <div className={st.wrapper_tasks}>
        <div className={st.headPanelWrapper}>
          <TasksDatesNav />
          {window.matchMedia('(max-width: 1279px)') && <TasksSearch />}
        </div>
        <div className={st.header}>
          <div className={st.title_wrapper}>
            <h1 className={st.title}>Sprint 1</h1>
            {/* <button className={st.button_edit}></button> */}
            <ChangeButton />
          </div>
          <div className={st.button_wrapper}>
            <AddButton createModal={handleCreateModal} />
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
        {showModal && <Modal onClose={handleCancelModal} />}
      </div>
    </div>
  );
}
