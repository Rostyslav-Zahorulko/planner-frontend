import React, { useState, useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useHistory, useLocation } from 'react-router';
import Media from 'react-media';
import { ToastContainer } from 'react-toastify';

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
import FormCreateSprint from '../../components/FormCreateSprint';
import ChartModalContainer from '../../components/ChartModal';
import AddButton from '../../components/AddButton';
import ChangeTitleInput from '../../components/ChangeTitleInput';

// REDUX
import { sprintsOperations } from '../../redux/sprints';
import { currentSprintSelectors } from '../../redux/current-sprint';
import { tasksSelectors } from '../../redux/tasks';

// import addTask from '../../redux/tasks/tasks-operations';
import { currentSprintOperations } from '../../redux/current-sprint';
// import { getVisibleTasks } from '../../redux/tasks/tasks-selectors';

const { getCurrentSprintTitle, getCurrentSprintStartDate } =
  currentSprintSelectors;

export default function TasksPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const { projectId, sprintId } = useParams();
  const sprintTitle = useSelector(getCurrentSprintTitle);
  const sprintStartDate = useSelector(getCurrentSprintStartDate);
  const visibleTasks = useSelector(tasksSelectors.getVisibleTasks);
  const [showInput, setShowInput] = useState(false);
  const [title, setTitle] = useState('');

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

  const handleClickBtnChange = () => {
    setShowInput(prevshowInput => !prevshowInput);
  };
  const handleInputChangeTitle = e => {
    setTitle(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (sprintTitle !== title) {
      dispatch(
        sprintsOperations.editSprintTitle(projectId, sprintId, {
          title: title,
        }),
      );
    }
    setShowInput(false);
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
        <ToastContainer autoClose={5000} hideProgressBar />
        <SidebarForReuse
          text={'sprint'}
          onOpen={toggleCreateSprintModal}
          onClick={handleGoBack}
        >
          <SprintLinkList />
        </SidebarForReuse>

        <div className={st.wrapper_tasks}>
          <div className={st.headPanelWrapper}>
            <TasksDatesNav />
            {window.matchMedia('(max-width: 1279px)') && <TasksSearch />}
          </div>

          <div className={st.header}>
            <div className={st.title_wrapper}>
              <h1 className={showInput ? st.titleDisable : st.title}>
                {sprintTitle}
              </h1>
              {/* <ChangeButton /> */}
              {/* ДОПИЛИТЬ ИЗМЕНЕНИЕ ТАЙТЛА */}
              {/* <ChangeTitleInput /> */}

              <form
                onSubmit={handleSubmit}
                className={
                  showInput ? st.changeTitleFormActive : st.changeTitleForm
                }
              >
                <label className={st.label}>
                  <input
                    className={st.input}
                    placeholder=" "
                    type="text"
                    required
                    value={title}
                    onChange={handleInputChangeTitle}
                  />
                </label>
              </form>
              <button
                type="button"
                className={showInput ? st.btnChangeDisable : st.btnChange}
                onClick={handleClickBtnChange}
              ></button>
              {/* <ChangeTitleInput /> */}
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
        {/* {tasks.length > 3 ? <ChartModalContainer /> : ''} */}
      </div>
      <div className={st.chart_wrapper}>
        <ChartModalContainer />
      </div>
    </>
  );
}
