import React, { useState } from "react";
import "./FacebookForm.css";

function FacebookForm() {
  const [firstName, setfirstName] = useState("");
  const [showUserFirstName, setShowUserFirstName] = useState(false);
  const [firstNameMsg, setfirstNameMsg] = useState("What's your name?");

  const [secondName, setsecondName] = useState("");
  const [showUserSecondName, setShowUserSecondName] = useState(false);
  const [secondNameMsg, setsecondNameMsg] = useState("What's your name?");

  const [mobileNumber, setmobileNumber] = useState("");
  const [showUserMobileNumber, setShowUserMobileNumber] = useState(false);
  const [updateMobileNumber, setupdateMobileNumber] = useState(
    "You will use this when you log in and if you ever need to reset your password"
  );

  const [userPassword, setuserPassword] = useState("");
  const [showUserPassword, setShowUserPassword] = useState(false);
  const [updatePassword, setupdatePassword] = useState(
    "Enter a combination of at least six numbers, letters and punctuation marks (such as ! and &)."
  );

  const userFirstName = (e) => {
    setfirstName(e.target.value);
    if (firstName !== "") {
      // setShowUserFirstName(false)
      setfirstNameMsg("Look's Good");
    }
  };
  const userSecondName = (e) => {
    setsecondName(e.target.value);
    if (secondName !== "") {
      // setShowUserSecondName(false);
      setsecondNameMsg("Look's Good");
    }
    // console.log(e.target.value);
  };

  const userMobileNumber = (e) => {
    setmobileNumber(e.target.value);
    if (mobileNumber !== "") {
      // setShowUserMobileNumber(false);
      setupdateMobileNumber("Look's Good");
    }
    // console.log(e.target.value);
  };
  const signupPassword = (e) => {
    setuserPassword(e.target.value);
    if (userPassword !== "") {
      // setShowUserPassword(false);
      setupdatePassword("Look's Good");
    }
    // console.log(e.target.value);
  };

  const signupformHandler = (e) => {
    e.preventDefault();
    if (firstName === "") {
      setShowUserFirstName(true);
    }
    if (secondName === "") {
      setShowUserSecondName(true);
    }
    if (mobileNumber === "") {
      setShowUserMobileNumber(true);
    }
    if (userPassword === "") {
      setShowUserPassword(true);
    }
  };

  return (
    <>
      <div className="main">
        <form onSubmit={signupformHandler}>
          <h2 className="first_title">Sign Up</h2>
          <p className="first_sub_title" id="sub_title">
            It's quick and easy.
          </p>
          <hr />
          <div className="input">
            <div className="d-flex">
              <div>
                <input
                  type="text"
                  placeholder="First Name"
                  className="first_name"
                  id="all"
                  value={firstName}
                  onChange={userFirstName}
                />
                {showUserFirstName && (
                  <p
                    className={`text-center ${
                      firstNameMsg === "Look's Good"
                        ? "text-success"
                        : "text-danger"
                    }`}
                  >
                    {firstNameMsg}
                  </p>
                )}
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Surname"
                  className="sure_name"
                  id="all"
                  value={secondName}
                  onChange={userSecondName}
                />
                 {showUserSecondName && (
                  <p
                    className={`text-center ${
                      secondNameMsg === "Look's Good"
                        ? "text-success"
                        : "text-danger"
                    }`}
                  >
                    {secondNameMsg}
                  </p>
                )}
              </div>
            </div>
            <div>
              <div>
                <input
                  type="email"
                  placeholder="Mobile number or email address"
                  id="all1"
                  value={mobileNumber}
                  onChange={userMobileNumber}
                />
                {showUserMobileNumber && (
                  <p
                    className={`text-center ${
                      updateMobileNumber === "Look's Good"
                        ? "text-success"
                        : "text-danger"
                    }`}
                  >
                    {updateMobileNumber}
                  </p>
                )}
              </div>
              <div>
                <input
                  type="password"
                  placeholder="New password"
                  id="all1"
                  value={userPassword}
                  onChange={signupPassword}
                />
                 {showUserPassword && (
                  <p
                    className={`text-center ${
                      updatePassword === "Look's Good"
                        ? "text-success"
                        : "text-danger"
                    }`}
                  >
                    {updatePassword}
                  </p>
                )}
              </div>
            </div>
            <button type="submit" className="submit">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default FacebookForm;
