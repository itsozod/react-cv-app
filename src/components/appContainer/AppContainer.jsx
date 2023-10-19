import styles from "./AppContainer.module.css";
export default function AppContainer({children}) {
  return <div className={styles.app}>{children}</div>;
}
