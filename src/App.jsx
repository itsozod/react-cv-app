import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import AppContainer from "./components/appContainer/AppContainer";
import PersonalInfo from "./components/personalDetails/PersonalDetails";
import InputGroup from "./components/inputGroup/InputGroup";
import styles from "./components/personalDetails/PersonalDetails.module.css";
import ResumeContainer from "./components/resumeContainer/ResumeContainer";
function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");

  const fullName = firstName + " " + lastName;

  function handleFirstName(e) {
    setFirstName(e.target.value);
  }
  function handleLastName(e) {
    setLastName(e.target.value);
  }
  function handleEmail(e) {
    setEmail(e.target.value);
  }
  function handlePhoneNumber(e) {
    setPhoneNumber(e.target.value);
  }
  function handleAddress(e) {
    setAddress(e.target.value);
  }
  return (
    <>
      <Header />
      <main id="main">
        <AppContainer>
          <div className="edit_side">
            <PersonalInfo>
              <form className={styles.personal_details}>
                <h2>Personal Info</h2>
                <InputGroup
                  label="First Name"
                  type="text"
                  value={firstName}
                  onChange={handleFirstName}
                  placeholder="Enter your first name"
                ></InputGroup>
                <InputGroup
                  label="Last Name"
                  type="text"
                  value={lastName}
                  onChange={handleLastName}
                  placeholder="Enter your last name"
                ></InputGroup>
                <InputGroup
                  label="Email"
                  type="email"
                  value={email}
                  onChange={handleEmail}
                  placeholder="Enter your email adress"
                ></InputGroup>
                <InputGroup
                  label="Phone number"
                  type="tel"
                  value={phoneNumber}
                  onChange={handlePhoneNumber}
                  placeholder="Enter your phone number"
                ></InputGroup>
                <InputGroup
                  label="Address"
                  type="text"
                  value={address}
                  onChange={handleAddress}
                  placeholder="Enter your adress"
                ></InputGroup>
              </form>
            </PersonalInfo>
          </div>
          <ResumeContainer>
            <div className="resume top">
              <div className="personal_info">
                <h1 className="personal_name">{fullName}</h1>
                <div className="contact_info">
                  <div className="contact">
                    <span>{email}</span>
                  </div>
                  <div className="contact">
                    <span>{phoneNumber}</span>
                  </div>
                  <div className="contact">
                    <span>{address}</span>
                  </div>
                </div>
              </div>
            </div>
          </ResumeContainer>
        </AppContainer>
      </main>
    </>
  );
}

export default App;
