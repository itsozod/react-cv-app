import styles from "./AppContainer.module.css";
import PropTypes from 'prop-types';
export default function AppContainer({children}) {
  return <div className={styles.app}>{children}</div>;
}
AppContainer.propTypes = {
  children: PropTypes.node.isRequired
}
