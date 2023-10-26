import styles from "./EducationInfo.module.css";
import PropTypes from 'prop-types';
export default function EducationInfo({children}) {
    return (
        <div className={styles.add_education}>{children}</div>
    );
}
EducationInfo.propTypes = {
    children: PropTypes.node.isRequired
  }