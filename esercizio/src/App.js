import { useState } from "react";
import "./App.css";
import NewItem from "./components/NewItem";
const App = () => {
  const [text, setText] = useState("");

  const textHandler = (event) => {
    setText(event.target.value);
    const iid = Math.random();
  };

  const buttonHandler = (event) => {};

  return (
    <div class="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
      <section className="text-3xl font-bold underline">
        <div className="text-center space-y-2 sm:text-left">
          <div className="space-y-0.5">
            <p className="text-lg text-black font-semibold">Erin Lindford</p>
            <p className="text-slate-500 font-medium">Product Engineer</p>
          </div>
          <input className="txt" onChange={textHandler} />
          <button className="btn btn" onSubmit={buttonHandler}>
            {" "}
            Salva
          </button>
          <p> {text}</p>
          <NewItem titolo={text} id=iid />
        </div>
      </section>
    </div>
  );
};

export default App;
