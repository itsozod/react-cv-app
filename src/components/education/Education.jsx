import styles from "./Education.module.css";
import PropTypes from 'prop-types';
export default function Education({children}) {
    return (
        <div className={styles.add_education}>{children}</div>
    );
}
Education.propTypes = {
    children: PropTypes.node.isRequired
  }