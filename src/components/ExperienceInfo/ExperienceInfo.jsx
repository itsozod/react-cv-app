import styles from "./ExperienceInfo.module.css";
import PropTypes from "prop-types";
export default function ExperinceInfo({
  experience,
  handleExperienceChange,
  removeExperience,
}) {
  return (
    <div className={styles.experience}>
      <label>School</label>
      <input
        type="text"
        name="school"
        placeholder="Enter school/university"
        value={experience.company}
        onChange={handleExperienceChange}
      />
      <label>Degree</label>
      <input
        type="text"
        name="degree"
        placeholder="Degree/field of study"
        value={experience.position}
        onChange={handleExperienceChange}
      />
      <label>Start date</label>
      <input
        type="date"
        name="start"
        value={experience.startDate}
        onChange={handleExperienceChange}
      />
      <label>End date</label>
      <input
        type="date"
        name="end"
        value={experience.endDate}
        onChange={handleExperienceChange}
      />
      <div className={styles.buttons_container}>
        <button className={styles.remove_btn} onClick={removeExperience}>
          Remove
        </button>
      </div>
    </div>
  );
}
ExperinceInfo.propTypes = {
  experience: PropTypes.object.isRequired,
  handleExperienceChange: PropTypes.func.isRequired,
  removeExperience: PropTypes.func.isRequired,
};
