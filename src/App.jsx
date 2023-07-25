import Navbar from './components/Navbar.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Characters from './pages/Characters.jsx';
import Locations from './pages/Locations.jsx';
import Episodes from './pages/Episodes.jsx';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/episodes" element={<Episodes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
