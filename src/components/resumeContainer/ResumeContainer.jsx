import styles from "./ResumeContainer.module.css"
import PropTypes from 'prop-types';
export default function ResumeContainer({children}) {
    return <div className={styles.resume_container}>{children}</div>
}
ResumeContainer.propTypes = {
    children: PropTypes.node.isRequired,
}