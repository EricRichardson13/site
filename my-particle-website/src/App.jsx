import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import ParticleBackground from './components/ParticleBackground';
import NavButton from './components/NavButton';

const App = () => {
  return (
    <Router>
      <div className="app">
        <ParticleBackground />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<DummyPage title="About" />} />
            <Route path="/projects" element={<DummyPage title="Projects" />} />
            <Route path="/contact" element={<DummyPage title="Contact" />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

const Home = () => {
  const navigate = useNavigate();
  
  return (
    <div className="menu">
      <NavButton text="About" onClick={() => navigate('/about')} />
      <NavButton text="Projects" onClick={() => navigate('/projects')} />
      <NavButton text="Contact" onClick={() => navigate('/contact')} />
    </div>
  );
};

const DummyPage = ({ title }) => {
  const navigate = useNavigate();
  
  return (
    <div className="dummy-page">
      <h1>{title}</h1>
      <NavButton text="Back to Home" onClick={() => navigate('/')} />
    </div>
  );
};

export default App; 