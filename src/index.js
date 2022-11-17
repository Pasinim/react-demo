
/** index.js è il primo file che viene caricato quando viene eseguito npm start */
/** Viene trasformato prima di mandarlo al browser, altrimenti non andrebbe */

import ReactDOM from 'react-dom/client';

import './index.css'; 
import App from './App';
/**
 * Nella seguente riga di codice sto dicendo che il <div> in `index.html` deve essere sostituito da <App />
 */
const root = ReactDOM.createRoot(document.getElementById('root')); 
/** APp è un componente */
root.render(<App />); 
