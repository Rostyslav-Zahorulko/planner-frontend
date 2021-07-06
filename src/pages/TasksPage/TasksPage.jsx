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
// import ChangeButton from '../../components/СhangeButton/ChangeButton';
import SidebarForReuse from '../../components/SidebarForReuse';
import SprintLinkList from '../../components/SprintLinkList';
import Modal from '../../components/Modal';
import FormCreateTask from '../../components/FormCreateTask';
// import FormCreateSprint from '../../components/FormCreateSprint';
import ChartModalContainer from '../../components/ChartModal';
import AddButton from '../../components/AddButton';
// import ChangeTitleInput from '../../components/ChangeTitleInput';

// LOCAl DATA
import sprints from '../../data/sprints.json';

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
  const { projectId, sprintId } = useParams();
  const sprintTitle = useSelector(getCurrentSprintTitle);
  const sprintStartDate = useSelector(getCurrentSprintStartDate);
  const visibleTasks = useSelector(tasksSelectors.getVisibleTasks);

  const [isShown, setIsShown] = useState(false);

  const [showInput, setShowInput] = useState(false);
  const [title, setTitle] = useState('');

  const toggleModal = useCallback(() => {
    setIsShown(prevIsShown => !prevIsShown);
  }, []);

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
              <h1 className={showInput ? st.titleDisable : st.title}>
                {sprintTitle}
              </h1>
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
          <TasksList
            visibleTasks={visibleTasks}
            projectId={projectId}
            sprintId={sprintId}
          />

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
