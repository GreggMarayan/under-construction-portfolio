import { BrowserRouter as Router, Routes, Route } from "react-router-dom";  //routing

import Home from './pages/Home.jsx';
import About from './pages/About.jsx';

import MainLayout from './layouts/MainLayout';  //For globally adding bubble menu

function App() {
  return (
    <Router>
      <Routes>

        <Route path="/" element={
          <MainLayout>
            <Home />
          </MainLayout>
        } />

        <Route path="/about" element={
          <MainLayout>
            <About />
          </MainLayout>
        } />

        {/* Add more routes here */}

      </Routes>
    </Router>
  );

}

export default App;