import "./User.css";
const User = (props) => {
  console.log("PROPS: " + JSON.stringify(props));
  console.log("IN USER: " + props.nome);
  const clickHandler = () => {
    props.rinomina();
  };
  return (
    <div className="flex justify-center">
      <div className="content-center border-2 flex rounded-lg space-y-40 w-24 bg-sky-500 border-style:solid justify-center">
        {props.nome} ( {props.eta} )
      </div>
      <button className="btn btn" onClick={clickHandler}>
        Rinomina
      </button>
    </div>
  );
};

export default User;
