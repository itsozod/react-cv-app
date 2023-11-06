import styles from "./EducationHolder.module.css";
import PropTypes from 'prop-types';
export default function EducationHolder({children}) {
    return <div className={styles.add_education}>{children}</div>
}
EducationHolder.propTypes = {
    children: PropTypes.node.isRequired,
}