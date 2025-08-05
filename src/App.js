// src/App.js
import './index.css'; 
 import Home from './Pages/Home'
 import {ToastContainer} from 'react-toastify'

function App() {
  return (
    <div>
      <Home />
      <ToastContainer />
    </div>
  );
}

export default App;
