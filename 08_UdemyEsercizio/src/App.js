import React, { useEffect, useState } from "react";
import AddUser from "./components/Users/AddUser";
import "./App.css";
import UserList from "./components/Users/UserList";
import User from "./components/Users/User";
function App() {
  const [userObj, setUserObj] = React.useState([
    { user: "abba", age: 11 },
    { user: "pippo", age: 2 },
    { user: "carlo", age: 15 },
  ]);
  // const [users, setUsers] = React.useState([]);
  // const [age, setAge] = React.useState([]);

  const addUserHandler = (username, userAge) => {
    // setUsers((prevUsers) => [username, ...prevUsers]);
    // setAge((prevAge) => [userAge, ...prevAge]);
    setUserObj((prevUserObj) => [
      ...prevUserObj,
      { user: username, age: userAge },
    ]);
  };

  // useEffect(() => {
  //   console.log(prevObj);
  // }, [prevObj]);

  return (
    <div className="flex flex-col justify-center">
      <form className="form w-240 ">
        <AddUser onAddUser={addUserHandler} />
      </form>

      <div className="flex flex-col justify-center">
        <UserList utenti={userObj} />
      </div>
    </div>
  );
}

export default App;
