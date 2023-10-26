import styles from "./EducationContainer.module.css";
import PropTypes from 'prop-types';
export default function EducationContainer({ children }) {
  return <div className={styles.education_container}>{children}</div>;
}
EducationContainer.propTypes = {
    children: PropTypes.node.isRequired
  }
