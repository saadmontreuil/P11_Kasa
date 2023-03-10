import './App.css';
import { Routes , Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Apartement from './pages/Apartement';
import Error from './pages/Error';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { Outlet } from 'react-router-dom';

const PageLayout = () => (
  <>
    <Outlet />
    <Footer />
  </>
);

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route path="/" element={<Home/>} />
          <Route path="about" element={<About/>} />
          <Route path="logement/:id" element={<Apartement/>} />
        </Route>
        <Route path="*" element={<Error/>} />
      </Routes>
    </div>
  );
}

export default App;
