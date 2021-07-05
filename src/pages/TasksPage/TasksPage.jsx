import React, { useState, useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import Media from 'react-media';

// STYLES
import st from './TasksPage.module.css';

// Components
import TasksList from '../../components/TasksList';
import TasksDatesNav from '../../components/TasksDatesNav';
import TasksSearch from '../../components/TasksSearchFull';
import SprintHeader from '../../components/SprintHeader';
import ChangeButton from '../../components/СhangeButton/ChangeButton';
import SidebarForReuse from '../../components/SidebarForReuse';
import SprintLinkList from '../../components/SprintLinkList';
import Modal from '../../components/Modal';
import FormCreateTask from '../../components/FormCreateTask';
// import FormCreateSprint from '../../components/FormCreateSprint';
import ChartModalContainer from '../../components/ChartModal';
import AddButton from '../../components/AddButton';

// LOCAl DATA
import sprints from '../../data/sprints.json';

// REDUX
import { sprintsOperations } from '../../redux/sprints';
import { currentSprintSelectors } from '../../redux/current-sprint';
// import { getTasks } from '../../redux/tasks/tasks-selectors';
// import addTask from '../../redux/tasks/tasks-operations';
import { currentSprintOperations } from '../../redux/current-sprint';
import { getVisibleTasks } from "../../redux/tasks/tasks-selectors";

const { getCurrentSprintTitle, getCurrentSprintStartDate } =
  currentSprintSelectors;


export default function TasksPage() {
  const dispatch = useDispatch();
  const { projectId, sprintId } = useParams();
  const sprintTitle = useSelector(getCurrentSprintTitle);
  const sprintStartDate = useSelector(getCurrentSprintStartDate);
  // const tasks = useSelector(getTasks);
  const visibleTasks = useSelector(getVisibleTasks);
  const [isShown, setIsShown] = useState(false);
  

  const toggleModal = useCallback(() => {
    setIsShown(prevIsShown => !prevIsShown);
  }, []);

  useEffect(() => {
    dispatch(sprintsOperations.getSprintInfo(projectId, sprintId));
  }, [dispatch, projectId, sprintId]);

  useEffect(() => {
    dispatch(currentSprintOperations.getDisplayedDate(sprintStartDate));
  }, [dispatch, sprintStartDate]);

  return (
    <>
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
              <h1 className={st.title}> {sprintTitle}</h1>
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
          <TasksList visibleTasks={visibleTasks} projectId={projectId} sprintId={sprintId} />

          {isShown && (
            <Modal onClose={toggleModal}>
              <FormCreateTask />
            </Modal>
          )}
        </div>
        {/* {tasks.length > 3 ? <ChartModalContainer /> : ''} */}
      </div>
      <div className={st.chart_wrapper}>
        <ChartModalContainer />
      </div>
    </>
  );
}
