// Libraries
import React, { useState, useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useHistory, useLocation } from 'react-router';
import * as dayjs from 'dayjs';

// Components
import TasksList from '../../components/TasksList';
import TasksDatesNav from '../../components/TasksDatesNav';
import TasksSearch from '../../components/TasksSearchFull';
import SprintHeader from '../../components/SprintHeader';
import SidebarForReuse from '../../components/SidebarForReuse';
import SprintLinkList from '../../components/SprintLinkList';
import Modal from '../../components/Modal';
import FormCreateTask from '../../components/FormCreateTask';
import FormCreateSprint from '../../components/FormCreateSprint';
import ChartModalContainer from '../../components/ChartModalContainer';
import AddButton from '../../components/AddButton';
import PageTitle from '../../components/PageTitle';

// Styles
import st from './TasksPage.module.css';

// Redux
import { projectsOperations } from '../../redux/projects';
import { sprintsOperations, sprintsSelectors } from '../../redux/sprints';
import { tasksSelectors } from '../../redux/tasks';
import {
  currentSprintOperations,
  currentSprintSelectors,
} from '../../redux/current-sprint';

const { getProjectInfo } = projectsOperations;

const { getSprintInfo, editSprintTitle } = sprintsOperations;

const { getSprintsItems } = sprintsSelectors;

const { getVisibleTasks } = tasksSelectors;

const { getDisplayedDate } = currentSprintOperations;

const {
  getCurrentSprintTitle,
  getCurrentSprintStartDate,
  getCurrentSprintDuration,
} = currentSprintSelectors;

export default function TasksPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const { projectId, sprintId } = useParams();
  const sprints = useSelector(getSprintsItems);
  const sprintTitle = useSelector(getCurrentSprintTitle);
  const sprintStartDate = useSelector(getCurrentSprintStartDate);
  const sprintDuration = useSelector(getCurrentSprintDuration);
  const visibleTasks = useSelector(getVisibleTasks);
  const array = new Array(sprintDuration).fill('');
  const sprintDates = array.map((item, ind) => {
    const date = dayjs(sprintStartDate).add(ind, 'day').format('DD.MM.YYYY');
    return date;
  });

  const [isCreateSprintModalShown, setCreateSprintModalIsShown] =
    useState(false);
  const [isCreateTaskModalShown, setCreateTaskModalIsShown] = useState(false);

  /*Create sprint*/
  const toggleCreateSprintModal = useCallback(() => {
    setCreateSprintModalIsShown(prevValue => !prevValue);
  }, []);

  /*Create task*/
  const toggleCreateTaskModal = useCallback(() => {
    setCreateTaskModalIsShown(prevValue => !prevValue);
  }, []);

  // Show sprints btn for sidebar
  const handleGoBack = () => {
    history.push(location?.state?.from?.location ?? `/projects/${projectId}`);
  };

  // Change title
  const handleSprintTitleChange = newTitle => {
    if (sprintTitle !== newTitle && newTitle !== '') {
      dispatch(editSprintTitle(projectId, sprintId, newTitle));
    }
  };

  useEffect(() => {
    dispatch(getSprintInfo(projectId, sprintId));
  }, [dispatch, projectId, sprintId]);

  useEffect(() => {
    dispatch(getProjectInfo(projectId));
  }, [dispatch, projectId]);

  useEffect(() => {
    dispatch(getDisplayedDate(sprintStartDate));
  }, [dispatch, sprintStartDate]);

  return (
    <>
      <div className={st.wrapper}>
        <SidebarForReuse
          text={'sprint'}
          onOpen={toggleCreateSprintModal}
          onClick={handleGoBack}
        >
          <SprintLinkList sprints={sprints} />
        </SidebarForReuse>

        <div className={st.wrapper_tasks}>
          <div className={st.headPanelWrapper}>
            <TasksDatesNav sprintDates={sprintDates} />
            {window.matchMedia('(max-width: 1279px)') && <TasksSearch />}
          </div>

          <div className={st.header}>
            <PageTitle
              title={sprintTitle}
              onChangeTitle={newTitle => handleSprintTitleChange(newTitle)}
            />
            <div className={st.addTasksButton}>
              <AddButton onOpen={toggleCreateTaskModal} />
              <p className={st.name_button}>Create a task</p>
            </div>
          </div>
          {window.matchMedia('(min-width: 1280px)') && <SprintHeader />}

          {visibleTasks.length > 0 ? (
            <TasksList
              visibleTasks={visibleTasks}
              projectId={projectId}
              sprintId={sprintId}
            />
          ) : (
            <p>You have no tasks yet</p>
          )}

          {isCreateSprintModalShown && (
            <Modal
              title={'Creating a sprint'}
              onClose={toggleCreateSprintModal}
            >
              <FormCreateSprint
                projectId={projectId}
                onClose={toggleCreateSprintModal}
              />
            </Modal>
          )}
          {isCreateTaskModalShown && (
            <Modal title={'Creating a task'} onClose={toggleCreateTaskModal}>
              <FormCreateTask
                projectId={projectId}
                sprintId={sprintId}
                onClose={toggleCreateTaskModal}
              />
            </Modal>
          )}
        </div>
      </div>

      <div className={st.chart_wrapper}>
        {visibleTasks.length >= 3 ? <ChartModalContainer /> : ''}
      </div>
    </>
  );
}
