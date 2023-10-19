
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
