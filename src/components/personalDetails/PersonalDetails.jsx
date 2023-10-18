import { useState } from "react";
import styles from "./PersonalDetails.module.css";
import InputGroup from "../inputGroup/InputGroup";
export default function PersonalInfo() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const fullName = firstName + " " + lastName;

  function handleFirstName(e) {
    setFirstName(e.target.value);
  }
  function handleLastName(e) {
    setLastName(e.target.value);
  }

  return (
    <>
      <div className={styles.app}>
        <div className={styles.form_container}>
          <form className={styles.personal_details}>
            <h2>Personal Info</h2>
            <InputGroup
              value={firstName}
              onChange={handleFirstName}
              placeholder="Enter your first name"
            ></InputGroup>
            <InputGroup
              value={lastName}
              onChange={handleLastName}
              placeholder="Enter your last name"
            ></InputGroup>
          </form>
        </div>
        <div className="resume">
           <h1>Hello {fullName}</h1>
        </div>
      </div>
    </>
  );
}
