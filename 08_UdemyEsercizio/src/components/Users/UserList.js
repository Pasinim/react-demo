import userEvent from "@testing-library/user-event";
import User from "./User";
import "./User.css";

const UserList = (props) => {
  const rinomina = () => {};
  return (
    <div className="flex flex-col ">
      {props.utenti.map((x) => (
        <User nome={x.user} eta={x.age} />
      ))}
    </div>
  );
};

export default UserList;
