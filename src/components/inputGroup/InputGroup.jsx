import styles from "./InputGroup.module.css";
import PropTypes from 'prop-types';
export default function InputGroup({
  label,
  value,
  onChange,
  placeholder,
  type,
}) {
  return (
    <div className={styles.input_group}>
      <label>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
InputGroup.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired, 
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
}
