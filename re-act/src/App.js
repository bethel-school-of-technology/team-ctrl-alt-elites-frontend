
import './App.css';
import Home from './pages/home/home.js';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path= '/' element={<Home/>} />
      </Routes>
    </Router>
      // <Router>
      //  { <Navbar />
      // <Routes>
      //     <Route exact path='/' element={<Home />} />
      //     { <Route path='/about' element={<About/>} />
      //     <Route path='/login' element={<Login/>} />
      //     <Route path='/search' element={<Search/>} />
      //      }
      // </Routes> }
      // </Router>
  );
  }
    
  export default App;
