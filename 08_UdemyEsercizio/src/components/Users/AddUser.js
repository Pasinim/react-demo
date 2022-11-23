import { useState } from "react";
import "./User.css";

const AddUser = (props) => {
  let user = { nome: "", age: 0 };

  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();
    if (isEmpty(username, age)) return;
    props.onAddUser(username, age);

    //pulisco l'input
    setUsername("");
    setAge("");
  };

  const handleChangeUsername = (event) => {
    setUsername(event.target.value);
  };

  const handleChangeAge = (event) => {
    setAge(event.target.value);
  };

  const isEmpty = (username, age) => {
    if (username.trim().length === 0 || age.length === 0) return true;
    else return false;
  };

  return (
    <div className="flex flex-col content-center justify">
      <input
        className="input"
        id="username"
        type="text"
        onChange={handleChangeUsername}
        value={username}
      ></input>

      <input
        className="input"
        id="age"
        type="number"
        onChange={handleChangeAge}
        value={age}
      ></input>

      <button
        className="flex border-2 rounded-lg bg-sky-500 border-style:solid border-rose-500 justify-center"
        onClick={addUserHandler}
      >
        Aggiungi utente
      </button>
    </div>
  );
  //content-center border-2 flex rounded-lg space-y-40 w-24 bg-sky-500 border-style:solid justify-center">
};
export default AddUser;
