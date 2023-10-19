import styles from "./InputGroup.module.css";
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
