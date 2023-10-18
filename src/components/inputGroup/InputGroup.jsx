import styles from './InputGroup.module.css';
export default function InputGroup({label, value, onChange, placeholder}) {
    return (
        <div className={styles.input_group}>
            <label>{label}
            <input type="text" placeholder={placeholder} value={value} onChange={onChange} />
            </label>
        </div>
    );
}