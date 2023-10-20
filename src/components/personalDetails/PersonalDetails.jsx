import PropTypes from 'prop-types';
import styles from "./PersonalDetails.module.css";
export default function PersonalInfo({children}) {

  return (
    <>
      <div className={styles.form_container}>
        {children}
      </div>
    </>
  );
}
PersonalInfo.propTypes = {
  children: PropTypes.node.isRequired
}
