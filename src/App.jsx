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
import EducationHolder from "./components/educationHolder/EducationHolder";

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
  const [openEducation, setOpenEducation] = useState(
    getLocalStorage("openEducation")
  );
  const [educations, setEducations] = useState([
    {
      school: "",
      degree: "",
      start: "",
      end: "",
    },
  ]);

  const [backgroundColor, setBackgroundColor] = useState("");
  const [showBg, setShowBg] = useState(false);

  const changeBg = (e) => {
    setBackgroundColor(e.target.value);
  };

  // const showPicker = () => {
  //   setShowBg(true);
  // }

  const saveEducationsToLocalStorage = (key) => {
    localStorage.setItem("educations", JSON.stringify(key));
  };
  const getEducationsFromLocalStorage = () => {
    const keys = JSON.parse(localStorage.getItem("educations")) || [];
    setEducations(keys);
  };
  useEffect(() => {
    getEducationsFromLocalStorage();
  }, []);

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

  const handleEducationChange = (index, event) => {
    const { name, value } = event.target;
    const updatedEducations = [...educations];
    updatedEducations[index][name] = value;
    setEducations(updatedEducations);
    saveEducationsToLocalStorage(updatedEducations);
  };

  const handleAddEducation = () => {
    setEducations([
      ...educations,
      { school: "", degree: "", start: "", end: "" },
    ]);
    saveEducationsToLocalStorage([
      ...educations,
      { school: "", degree: "", start: "", end: "" },
    ]);
  };

  const handleRemoveEducation = (index, e) => {
    e.preventDefault();
    const updatedEducations = [...educations];
    updatedEducations.splice(index, 1);
    setEducations(updatedEducations);
    saveEducationsToLocalStorage(updatedEducations);
  };

  useEffect(() => {
    localStorage.setItem("firstName", JSON.stringify(firstName));
    localStorage.setItem("lastName", JSON.stringify(lastName));
    localStorage.setItem("email", JSON.stringify(email));
    localStorage.setItem("phoneNumber", JSON.stringify(phoneNumber));
    localStorage.setItem("address", JSON.stringify(address));
    localStorage.setItem("openEducation", JSON.stringify(openEducation));
  }, [firstName, lastName, email, phoneNumber, address, openEducation]);

  return (
    <>
      <Header />
      <main id="main">
        <AppContainer>
          <div className="edit_side">
            <div className="customize_and_clear">
              <button
                className={showBg === true ? "selected" : "custom"}
                onClick={() =>
                  showBg === true ? setShowBg(false) : setShowBg(true)
                }
              >
                Customize
              </button>
              {showBg ? (
                <input
                  type="color"
                  className="picker"
                  value={backgroundColor}
                  onChange={changeBg}
                />
              ) : null}
              <button className="clear">Clear</button>
            </div>
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
              <EducationHolder>
                <button className="expand_section" onClick={handleEducation}>
                  <h2>Education</h2>
                  {openEducation ? (
                    <i className="fa-solid fa-chevron-down"></i>
                  ) : (
                    <i className="fa-solid fa-chevron-up"></i>
                  )}
                </button>
                {openEducation && (
                  <div className="section_open">
                    {educations.map((education, index) => (
                      <div className="forms_container" key={index}>
                        <form className="forms_education">
                          <EducationInfo
                            education={education}
                            handleEducationChange={(event) =>
                              handleEducationChange(index, event)
                            }
                            removeEducation={(e) =>
                              handleRemoveEducation(index, e)
                            }
                          ></EducationInfo>
                        </form>
                      </div>
                    ))}
                    <div className="edu_btn_container">
                      <button
                        className="add_edu_button"
                        onClick={handleAddEducation}
                      >
                        <i className="fa-solid fa-plus"></i>
                        <h3 className="add_btn_h3">Add education</h3>
                      </button>
                    </div>
                  </div>
                )}
              </EducationHolder>
            </PersonalInfo>
          </div>
          <ResumeContainer>
            <div className="resume">
              <div className="personal_info" style={{ backgroundColor }}>
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
              <div className="edu_header_container">
                <h1 className="edu_header_h1">Education</h1>
              </div>
              {educations.map((education, index) => (
                <EducationContainer key={index}>
                  <div className="edu_holder">
                    {education.start ? (
                      <p className="dates">
                        {education.start}-{education.end}
                      </p>
                    ) : (
                      ""
                    )}
                    <p className="degree">{education.degree}</p>
                    <p className="school">{education.school}</p>
                  </div>
                </EducationContainer>
              ))}
            </div>
          </ResumeContainer>
        </AppContainer>
      </main>
    </>
  );
}

export default App;
