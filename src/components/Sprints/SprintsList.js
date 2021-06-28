import React from 'react';
//import PropTypes from 'prop-types';
import SprintItem from './SprintItem';
import styles from './Sprint.module.css';
const SprintList = ({ sprints }) => (
  <>
    <ul className={styles.sprint_list}>
      {sprints.map(sprint => (
        <SprintItem key={sprint.id} sprint={sprint} />
      ))}
    </ul>
  </>
);

/*SprintList.propTypes = {
  sprints: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      // ----: PropTypes.string,
    }),
  ),
};*/
/*SprintList.defaultProps = {
  sprints: [],
};*/
export default SprintList;
