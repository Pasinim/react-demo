import logo from "./logo.svg";
import "./css/App.css";
import "./css/basic.css";
import "./css/index.css";

function App() {
  return (
    <nav>
      <ul className="container">
        <li>Home</li>
        <li>Profile</li>
        <li className="search">
          <input type="text" className="search-input" placeholder="Search" />
        </li>
        <li>Logout</li>
      </ul>
    </nav>
  );
}

export default App;
