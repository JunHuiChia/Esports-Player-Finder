import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  NOT_LOGGED_IN,
  LOG_IN_FORM,
  SIGN_UP_FORM,
  LOGGED_IN,
} from "../constants/AuthStatus";

import { loginMsg } from '../components/login/login.js';

const loggedIn_key = 'loggedin';

const AppContext = React.createContext();

const AppProvider = (props) => {
    let hostName = process.env.REACT_APP_API_URL

  const [authStatus, setAuthStatus] = useState(NOT_LOGGED_IN);
  const [errorMessage, setErrorMessage] = useState("");
  const [userId, setUserId] = useState(0);
  const [userName, setUserName] = useState("");
  const [userNameInput, setUserNameInput] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");
  
  // useEffect(() => {
  //   if(localStorage.getItem(loggedIn_key)){
  //       setLoginStatus(true);
  //     }else{
  //       setLoginStatus(false);
  //     }
  // })

  function isLogin(){
    if(localStorage.getItem(loggedIn_key)){
      setLoginStatus(true);
    }else{
      setLoginStatus(false);
    }
  }

  function changeAuthStatusLogin() {
    setAuthStatus(LOG_IN_FORM);
  }

  function changeAuthStatusSignup() {
    setAuthStatus(SIGN_UP_FORM);
  }

  function handleUserNameInput(changeEvent) {
    let updatedUserName = changeEvent.target.value;
    setUserNameInput(updatedUserName);
  }

  function handleUserEmail(changeEvent) {
    let updatedUserEmail = changeEvent.target.value;
    setUserEmail(updatedUserEmail);
  }

  function handleUserPassword(changeEvent) {
    let updatedUserPassword = changeEvent.target.value;
    setUserPassword(updatedUserPassword);
  }

  const signup = (statusMsg) => {
    axios.defaults.withCredentials = true;
    // CSRF COOKIE
    axios.get(hostName + "api/sanctum/csrf-cookie").then(
      (response) => {
        //console.log(response);
        // SIGNUP / REGISTER
        axios
          .post(hostName + "api/register", {
            name: userNameInput,
            email: userEmail,
            password: userPassword,
          })
          .then(
            (response) => {
              //console.log(response);
              // GET USER
              axios.get(hostName + "api/user").then(
                (response) => {
                  //console.log(response);
                  setUserId(response.data.id);
                  setUserName(response.data.name);
                  setErrorMessage("");
                  setAuthStatus(LOGGED_IN);
                  setLoginStatus(true);
                  statusMsg("Successful Sign Up")
                },
                // GET USER ERROR
                (error) => {
                  setErrorMessage("Could not complete the sign up");
                  statusMsg("Could not complete the sign up")
                }
              );
            },
            // SIGNUP ERROR
            (error) => {
              if (error.response.data.errors.name) {
                setErrorMessage(error.response.data.errors.name[0]);
                statusMsg(error.response.data.errors.name[0]);
              } else if (error.response.data.errors.email) {
                setErrorMessage(error.response.data.errors.email[0]);
                statusMsg(error.response.data.errors.email[0]);
              } else if (error.response.data.errors.password) {
                setErrorMessage(error.response.data.errors.password[0]);
                statusMsg(error.response.data.errors.password[0]);
              } else if (error.response.data.message) {
                setErrorMessage(error.response.data.message);
                statusMsg(error.response.data.message);
              } else {
                setErrorMessage("Could not complete the sign up");
                statusMsg("Could not complete the sign up");
              }
            }
          );
      },
      // COOKIE ERROR
      (error) => {
        setErrorMessage("Could not complete the sign up");
        statusMsg("Could not complete the sign up");
      }
    );
  };

  const login = (statusMsg) => {
    axios.defaults.withCredentials = true;
    // CSRF COOKIE
    axios.get(hostName + "api/sanctum/csrf-cookie").then(
      (response) => {
        //console.log(response);
        // LOGIN
        axios
          .post(hostName + "api/login", {
            email: userEmail,
            password: userPassword,
          })
          .then(
            (response) => {
              //console.log(response);
              // GET USER
              axios.get(hostName + "api/user").then(
                (response) => {
                  //console.log(response);
                  setUserId(response.data.id);
                  setUserName(response.data.name);
                  setErrorMessage("");
                  setAuthStatus(LOGGED_IN);
                  localStorage.setItem(loggedIn_key, 'LoggedIn')
                  setLoginStatus(true);
                  statusMsg("Successful Login");
                },
                // GET USER ERROR
                (error) => {
                  setErrorMessage("Could not complete the login");
                }
              );
            },
            // LOGIN ERROR
            (error) => {
              if (error.response) {
                setErrorMessage(error.response.data.message);
                statusMsg(error.response.data.message)
              } else {
                setErrorMessage("Could not complete the login");
                statusMsg("Could not complete the login")
              }
            }
          );
      },
      // COOKIE ERROR
      (error) => {
        setErrorMessage("Could not complete the login");
        statusMsg("Could not complete the login");
      }
    );
  };

  function logout() {
    axios.defaults.withCredentials = true;
    axios.get(hostName + "api/logout");
    setUserId(0);
    setUserName("");
    setUserNameInput("");
    setUserEmail("");
    setUserPassword("");
    setAuthStatus(NOT_LOGGED_IN);
    localStorage.removeItem(loggedIn_key);
    setLoginStatus(false);
  }
    
    
  const checkDetails = () => {
    axios.defaults.withCredentials = true;
        // GET USER
        axios.get(hostName + "api/user").then(
            (response) => {
                console.log(response);
                setUserId(response.data.id);
                setUserName(response.data.name);
                setErrorMessage("");
            },
            // GET USER ERROR
            (error) => {
                setErrorMessage("Could not complete the login");
            }
        );
  };


  
  return (
    <AppContext.Provider
    value={{
      authStatus,
      changeAuthStatusLogin,
        changeAuthStatusSignup,
        userId,
        userName,
        userNameInput,
        userEmail,
        userPassword,
        loginStatus,
        setLoginStatus,
        handleUserNameInput,
        handleUserEmail,
        handleUserPassword,
        signup,
        login,
        checkDetails,
        logout,
        errorMessage,
        isLogin,
      }}
      >
      {props.children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
