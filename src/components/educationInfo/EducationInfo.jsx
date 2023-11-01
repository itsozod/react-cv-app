import styles from "./EducationInfo.module.css";
// import { useState } from "react";
// import PropTypes from 'prop-types';
const EducationInfo = ({
  education,
  handleEducationChange,
  removeEducation,
  // saveEducation,
  children,
}) => {

 
  return (
    <div className={styles.education}>
      <label>School</label>
      <input
        type="text"
        name="school"
        placeholder="Enter school/university"
        value={education.school}
        onChange={handleEducationChange}
      />
      <label>Degree</label>
      <input
        type="text"
        name="degree"
        placeholder="Degree/field of study"
        value={education.degree}
        onChange={handleEducationChange}
      />
      <label>Start date</label>
      <input
        type="date"
        name="start"
        value={education.start}
        onChange={handleEducationChange}
      />
      <label>End date</label>
      <input
        type="date"
        name="end"
        value={education.end}
        onChange={handleEducationChange}
      />
      <div className={styles.buttons_container}>
        <button className={styles.remove_btn} onClick={removeEducation}>
          Remove
        </button>
          {/* <button className={styles.save_btn} onClick={saveEducation}>
            Save
          </button> */}
          {children}
      </div>
    </div>
  );
};
export default EducationInfo;
