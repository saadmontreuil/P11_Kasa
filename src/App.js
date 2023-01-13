import './App.css';
import { Routes , Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Apartement from './pages/Apartement';
import Error from './pages/Error';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="about" element={<About/>} />
        <Route path="logement/:id" element={<Apartement/>} />
        <Route path="*" element={<Error/>} />
      </Routes>
    </div>
  );
}

export default App;
