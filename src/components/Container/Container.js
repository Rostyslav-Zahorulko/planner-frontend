import PropTypes from "prop-types";
import styles from "./Container.module.css";

export default function Container({ children }) {
  return <div className={styles.container}>{children}</div>;
}

Container.defaultProps = {
  children: "Here must be some content...",
};

Container.propTypes = {
  children: PropTypes.node,
};
