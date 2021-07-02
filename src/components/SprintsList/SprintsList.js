import React from 'react';
//import PropTypes from 'prop-types';
import SprintItem from '../SprintItem';
import styles from './SprintsList.module.css';
// import sprints from '../../data/sprints.json';

const SprintsList = ({ sprints }) => (
  <>
    <ul className={styles.sprints_list}>
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
export default SprintsList;
