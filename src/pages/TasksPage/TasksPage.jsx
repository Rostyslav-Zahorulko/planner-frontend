import React, { useState, useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useHistory, useLocation } from 'react-router';
import Media from 'react-media';
import * as dayjs from 'dayjs';

// STYLES
import st from './TasksPage.module.css';

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

// REDUX
import { sprintsOperations } from '../../redux/sprints';
import { sprintsSelectors } from '../../redux/sprints';
import { currentSprintSelectors } from '../../redux/current-sprint';
import { tasksSelectors } from '../../redux/tasks';

import { currentSprintOperations } from '../../redux/current-sprint';

const { getSprintsItems } = sprintsSelectors;

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
  const visibleTasks = useSelector(tasksSelectors.getVisibleTasks);
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

  // Change Title
  const handleSprintTitleChange = newTitle => {
    if (sprintTitle !== newTitle && newTitle !== '') {
      dispatch(
        sprintsOperations.editSprintTitle(projectId, sprintId, newTitle),
      );
    }
  };

  useEffect(() => {
    dispatch(sprintsOperations.getSprintInfo(projectId, sprintId));
  }, [dispatch, projectId, sprintId]);

  useEffect(() => {
    dispatch(currentSprintOperations.getDisplayedDate(sprintStartDate));
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
            <div className={st.title_wrapper}>
              <PageTitle
                title={sprintTitle}
                onChangeTitle={newTitle => handleSprintTitleChange(newTitle)}
              />
            </div>
            <div className={st.button_wrapper}>
              <AddButton onOpen={toggleCreateTaskModal} />
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
          {visibleTasks.length > 0 ? (
            <TasksList
              visibleTasks={visibleTasks}
              projectId={projectId}
              sprintId={sprintId}
            />
          ) : (
            <div>You have no tasks yet</div>
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
