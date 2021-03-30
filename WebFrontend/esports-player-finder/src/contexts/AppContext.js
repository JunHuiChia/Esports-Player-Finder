import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  NOT_LOGGED_IN,
  LOG_IN_FORM,
  SIGN_UP_FORM,
  LOGGED_IN,
} from "../constants/AuthStatus";

const loggedIn_key = 'loggedin';

const AppContext = React.createContext();

/**
 * Used for logging in, registering and logging out users
 * @component
 * @returns 
 * <AppContext.Provider></AppContext.Provider>
 * Used for wrapping around other components for login/register/logout
 */

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
  const [gameList, setGameList] = useState([]);
  const [userGameRoles, setUserGameRoles] = useState([]);
  const [gameRoleError, setGameRoleError] = useState("");
  const [teamData, setTeamData] = useState([]);
  const [userTeamID, setUserTeamID] = useState([]);
  const [userTeamData, setUserTeamData] = useState();

  /**
   * @function
   * @description Changes the login status of user
   * 
   */
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

  /**
   * @function
   * @description Updates the value of username state
   * @param {event} onChangeEvent - When the input form has a change of data
   */
  function handleUserNameInput(changeEvent) {
    let updatedUserName = changeEvent.target.value;
    setUserNameInput(updatedUserName);
  }

    /**
   * @function
   * @description Updates the value of email state
   * @param {event} onChangeEvent - When the input form has a change of data
   */
  function handleUserEmail(changeEvent) {
    let updatedUserEmail = changeEvent.target.value;
    setUserEmail(updatedUserEmail);
  }
    /**
   * @function
   * @description Updates the value of password state
   * @param {event} onChangeEvent - When the input form has a change of data
   */
  function handleUserPassword(changeEvent) {
    let updatedUserPassword = changeEvent.target.value;
    setUserPassword(updatedUserPassword);
  }

  /**
   * @function
   * @description HTTP requests using axios for signing up users
   * @param {string} statusMsg - status of the signup 
   * 
   */
  const signup = (statusMsg) => {
    axios.defaults.withCredentials = true;
    // CSRF COOKIE
    axios.get(hostName + "api/sanctum/csrf-cookie").then(
      (response) => {
        //console.log(response);
        // SIGNUP / REGISTER
        axios
          .post(hostName + "api/register", {
            username: userNameInput,
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
                  setUserName(response.data.username);
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
              if (error.response.data.errors.username) {
                setErrorMessage(error.response.data.errors.username[0]);
                statusMsg(error.response.data.errors.username[0]);
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

    /**
   * @function
   * @description HTTP requests using axios for logging in users
   * @param {string} statusMsg - status of the login 
   */
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
                  setUserName(response.data.username);
                  setErrorMessage("");
                  setAuthStatus(LOGGED_IN);
                  setUserGameRoles(response.data["game_roles"])
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

  /**
   * @function
   * @description Used for logging the user out and resets all forms
   */
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
    
    
  const checkDetails = async () => {
    axios.defaults.withCredentials = true;
        // GET USER
        axios.get(hostName + "api/user").then(
            (response) => {
                console.log(response);
                setUserId(response.data.id);
                setUserName(response.data.username);
                setUserEmail(response.data.email)
                setUserGameRoles(response.data["game_roles"])
                setUserTeamID(response.data.teams)
                setErrorMessage("");
            },
            // GET USER ERROR
            (error) => {
                setErrorMessage("Could not complete the login");
            }
        );
  };

  /**
   * @function
   * @description API Call for getting a list of games
   */

  const getGames = () => {
    axios.defaults.withCredentials = true;

    axios.get(hostName + "api/sanctum/csrf-cookie").then(
      (response) => {
        axios.get(hostName + "api/games").then(
          (response) => { 
            setGameList(response.data.games);
          },
          (error) =>{
            setErrorMessage("Could not retrieve games")
          })
      },
      (error) => {
        setErrorMessage("Could not get response for games")
      })
  }

    /**
   * @function
   * @description Post API for creating a new game role for the user
   */
  const addGameRole = (roleID) => {
    console.log(roleID);

    axios.get(hostName + "api/sanctum/csrf-cookie").then(
    (response) => {
      axios.post(hostName + "api/user/gamerole", {
        game_role_id: roleID,
      })
      .then(
        (response) => {
          setGameRoleError("");
          checkDetails();
        },
        (error) => {
          setGameRoleError("Invalid game role");
        })
    },
    (error) => {
      console.log(error);
    })
    }

        /**
   * @function
   * @description Post API for deleting game role for user
   */
  const deleteGameRole = (roleID) => {
    console.log(roleID);

    axios.get(hostName + "api/sanctum/csrf-cookie").then(
    (response) => {
      axios.delete(hostName + "api/user/gamerole", {
        data:{
          user_game_role_id : roleID
        }
      })
      .then(
        (response) => {
          checkDetails();
        },
        (error) => {
          setGameRoleError("Invalid game role");
          console.log("error1: ",error);
        })
    },
    (error) => {
      console.log("error2", error);
    })
    }


    /**
     * @function
     * @description Updates all the user's details
     * @param {string} email - Email to be updated to
     * @param {string} password - Password to be updated to
     * @param {string} username - Username to be updated to
     */
    const updateUserAllDetail = (email,password,username) => {
      console.log(email,password,username);
      axios.get(hostName + "api/sanctum/csrf-cookie").then(
      (response) => {
        axios.patch(hostName + "api/users",{
          email: email,
          password: password,
          username: username,
        }).then(
        (response) => {
          console.log(response);
          checkDetails();
          setErrorMessage("Details updated successfully")
        },
        (error) => {
          setErrorMessage("Cannot update details");
        })
      },
      (error) => {
        console.log(error);
      })
      }

      /**
       * @function
       * @description Updates the username of the user
       * @param {string} username - Username to be updated to
       */
      const updateUsername = (username) => {
        axios.get(hostName + "api/sanctum/csrf-cookie").then(
          (response) => {
            axios.patch(hostName + "api/users",{
              username: username,
            }).then(
            (response) => {
              console.log(response);
              checkDetails();
              setErrorMessage("Username updated successfully")

            },
            (error) => {
              setErrorMessage("Cannot update username")
            })
          },
          (error) => {
            console.log(error);
          })
      }
      
      /**
       * @function
       * @description Updates the Password of the user
       * @param {string} password - Password to be updated to
       */
      const updatePassword = (password) => {
        axios.get(hostName + "api/sanctum/csrf-cookie").then(
          (response) => {
            axios.patch(hostName + "api/users",{
              password: password,
            }).then(
            (response) => {
              console.log(response);
              checkDetails();
              setErrorMessage("Password updated successfully")

            },
            (error) => {
              setErrorMessage("Password is too short/long")
            })
          },
          (error) => {
            console.log(error);
          })
      }

      /**
       * @function
       * @description Updates the Email of the user
       * @param {string} email - Email to be updated to
       */
      const updateEmail = (email) => {
        axios.get(hostName + "api/sanctum/csrf-cookie").then(
          (response) => {
            axios.patch(hostName + "api/users",{
              email: email,
            }).then(
            (response) => {
              console.log(response);
              checkDetails();
              setErrorMessage("Email updated successfully")
            },
            (error) => {
              setErrorMessage("Email is invalid")
            })
          },
          (error) => {
            console.log(error);
          })
      }

      /**
       * @function
       * @description Creates a brand new team for the user
       * @param {string} teamName - name of the team 
       * @param {string} teamGame - the game the team is playing
       * @param {string} teamDesc - description of the team
       * @param {string} teamDiscID - The channel ID for the discord
       * @param {function} handleClose - Function for closing the create team page after everything is done.
       */
      const createTeam = (teamName, teamGame, teamDesc, teamDiscID,handleClose) => {
        console.log(teamName, teamGame, teamDesc, teamDiscID);
    
        axios.get(hostName + "api/sanctum/csrf-cookie").then(
        (response) => {
          axios.post(hostName + "api/teams", {
            name: teamName,
            description: teamDesc,
            game_id: teamGame,
            discord_channel_id: teamDiscID,
          })
          .then(
            (response) => {
              console.log(response);
              handleClose();
            },
            (error) => {
              setErrorMessage("Cannot create team")
            })
        },
        (error) => {
          console.log(error);
        })
        }

      /**
       * @function
       * @description gets the team details by ID
       * @param {string} teamID - ID of the team 
       */
        const getTeamByID = (teamID) => {
          axios.get(hostName + "api/sanctum/csrf-cookie").then(
            (response) => {
              axios.get(hostName + `api/teams?id=${teamID}`)
              .then(
                async (response) => {
                  console.log("res: " , response);
                  if(userTeamData[0] === undefined){
                    await setUserTeamData([response.data.Team])
                  }else{
                    await setUserTeamData([userTeamData[0], response.data.Team])
                  }
                  await console.log(userTeamData);
                },
                (error) => {
                  setErrorMessage("Cannot get team")
                })
            },
            (error) => {
              console.log(error);
            })
        }

        
      /**
       * @function
       * @description gets the team details by Game
       * @param {string} gameID - ID of the game 
       */
      const getTeamByGame = (gameID , handleSearch) => {
        axios.get(hostName + "api/sanctum/csrf-cookie").then(
          (response) => {
            axios.get(hostName + `api/teams/find?game_id=${gameID}`)
            .then(
              (response) => {
                console.log(response);
                setTeamData(response.data.Teams);
                handleSearch()
                // console.log(response.data.Teams);
              },
              (error) => {
                setErrorMessage("Cannot get team")
              })
          },
          (error) => {
            console.log(error);
          })
      }
  
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
        getGames,
        gameList,
        addGameRole,
        updateEmail,
        updatePassword,
        updateUserAllDetail,
        updateUsername,
        userGameRoles,
        gameRoleError,
        createTeam,
        getTeamByID,
        teamData,
        deleteGameRole,
        getTeamByGame,
        userTeamID,
        userTeamData,
        setUserTeamData,
      }}
      >
      {props.children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
