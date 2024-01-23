//dependencies
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from 'axios';

//styling
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//pages 
import HomePage from './Pages/HomePage';
import RafflePage from './Pages/RafflePage';
import HomeNavBar from './Components/HomeNavBar';

const API = process.env.REACT_APP_API_URL;

const App = () => {
  const [raffles, setRaffles] = useState([]);


  useEffect(() => {
    axios.get(`${API}/raffles`)
    .then(res => setRaffles(res.data.payload))
    .catch(err => console.error(err))
  }, []);


  return (
    <div className="App">
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Router>
        <HomeNavBar />
        <Routes>
          <Route path="/" element={<HomePage raffles={raffles}  />} />
          <Route path="/raffles/:id" element={<RafflePage  />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
