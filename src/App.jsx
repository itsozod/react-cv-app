import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import AppContainer from "./components/appContainer/AppContainer";
import PersonalInfo from "./components/personalDetails/PersonalDetails";
import InputGroup from "./components/inputGroup/InputGroup";
import styles from "./components/personalDetails/PersonalDetails.module.css";
import ResumeContainer from "./components/resumeContainer/ResumeContainer";
import EducationInfo from "./components/educationInfo/EducationInfo";
import EducationContainer from "./components/educationContainer/EducationContainer";

const getLocalStorage = (key) => {
  let state = localStorage.getItem(key);

  if (state) {
    return JSON.parse(localStorage.getItem(key));
  } else {
    return "";
  }
};
function App() {
  const [firstName, setFirstName] = useState(getLocalStorage("firstName"));
  const [lastName, setLastName] = useState(getLocalStorage("lastName"));
  const [email, setEmail] = useState(getLocalStorage("email"));
  const [phoneNumber, setPhoneNumber] = useState(
    getLocalStorage("phoneNumber")
  );
  const [address, setAddress] = useState(getLocalStorage("address"));
  const [openEducation, setOpenEducation] = useState(false);
  const [addBtn, setAddBtn] = useState(false);
  const [school, setSchool] = useState("");
  const [degree, setDegree] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

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
  function handleEducation() {
    if (openEducation === false) {
      setOpenEducation(true);
    } else {
      setOpenEducation(false);
    }
    console.log("Education");
  }
  function handleAddBtn() {
    setAddBtn(true);
    console.log("Add");
  }
  function handleSchool(e) {
    setSchool(e.target.value);
  }
  function handleDegree(e) {
    setDegree(e.target.value);
  }

  function handleStartDate(e) {
    setStartDate(e.target.value);
  }
  function handleEndDate(e) {
    setEndDate(e.target.value);
  }
  function cancelEducation() {
    setOpenEducation(false);
    setAddBtn(false);
    setSchool("");
    setDegree("");
    setStartDate("");
    setEndDate("");
    setTimeout(() => {
      alert("Cancelled");
    }, 1000);
    console.log("Canceled");
  }

  useEffect(() => {
    localStorage.setItem("firstName", JSON.stringify(firstName));
    localStorage.setItem("lastName", JSON.stringify(lastName));
    localStorage.setItem("email", JSON.stringify(email));
    localStorage.setItem("phoneNumber", JSON.stringify(phoneNumber));
    localStorage.setItem("address", JSON.stringify(address));
  }, [firstName, lastName, email, phoneNumber, address]);

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
              <EducationInfo>
                <button className="expand_section" onClick={handleEducation}>
                  <h2>Education</h2>
                  {openEducation ? (
                    <i className="fa-solid fa-chevron-down"></i>
                  ) : (
                    <i className="fa-solid fa-chevron-up"></i>
                  )}
                </button>
                {openEducation && (
                  <div className="edu_btn_container">
                    <button className="add_edu_button" onClick={handleAddBtn}>
                      <i className="fa-solid fa-plus"></i>
                      <h3 className="add_btn_h3">Add education</h3>
                    </button>
                  </div>
                )}
                {addBtn && (
                  <div className="section_open">
                    <div className="forms_container">
                      <form className="forms_education">
                        <InputGroup
                          label="School"
                          type="text"
                          placeholder="Enter school/university name"
                          value={school}
                          onChange={handleSchool}
                        ></InputGroup>
                        <InputGroup
                          label="Degree"
                          type="text"
                          placeholder="Enter degree/field of study"
                          value={degree}
                          onChange={handleDegree}
                        ></InputGroup>
                        <InputGroup
                          label="Start Date"
                          type="number"
                          placeholder="Enter Start Date"
                          value={startDate}
                          onChange={handleStartDate}
                        ></InputGroup>
                        <InputGroup
                          label="End Date"
                          type="number"
                          placeholder="Enter End Date"
                          value={endDate}
                          onChange={handleEndDate}
                        ></InputGroup>
                        <button
                          className="cancel_btn"
                          onClick={cancelEducation}
                        >
                          Cancel
                        </button>
                      </form>
                    </div>
                  </div>
                )}
              </EducationInfo>
            </PersonalInfo>
          </div>
          <ResumeContainer>
            <div className="resume">
              <div className="personal_info">
                <h1 className="personal_name">{fullName}</h1>
                <div className="contact_info">
                  <div className="contact">
                    {email && <i className="fa-solid fa-envelope"></i>}{" "}
                    <span>{email}</span>
                  </div>
                  <div className="contact">
                    {phoneNumber && <i className="fa-solid fa-phone"></i>}{" "}
                    <span>{phoneNumber}</span>
                  </div>
                  <div className="contact">
                    {address && <i className="fa-solid fa-location-dot"></i>}{" "}
                    <span>{address}</span>
                  </div>
                </div>
              </div>
              {addBtn && (
                <div className="edu_header_container">
                  <h1 className="edu_header_h1">Education</h1>
                </div>
              )}
              <EducationContainer>
                {addBtn && (
                  <div className="edu_holder">
                    {startDate ? (
                      <p className="dates">
                        {startDate}-{endDate}
                      </p>
                    ) : (
                      ""
                    )}
                    <p className="degree">{degree}</p>
                    <p className="school">{school}</p>
                  </div>
                )}
              </EducationContainer>
            </div>
          </ResumeContainer>
        </AppContainer>
      </main>
    </>
  );
}

export default App;
