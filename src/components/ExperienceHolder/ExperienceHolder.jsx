import PropTypes from "prop-types";
import styles from "./ExperienceHolder.module.css";

export default function ExperienceHolder({ children }) {
  return <div className={styles.experience_holder}>{children}</div>;
}
ExperienceHolder.propTypes = {
  children: PropTypes.node.isRequired,
};
