import "./App.css";
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Live from './components/Live';
import Today from './components/Today';
import MatchDetails from './pages/MatchDetails';
import Landing from './pages/Landing';

function App() {

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/live" element={<Live />} />
        <Route path="/today" element={<Today />} />
        <Route path="/matchdetails/:id" element={<MatchDetails />} />
      </Routes>
    </div>
  );
}

export default App;