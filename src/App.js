import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import Company from "./components/pages/Company";
import NewProject from "./components/pages/NewProject";

function App() {
  return (
    <Router>
      <div>
          <Link to='/'>Home</Link>
          <Link to='/contact'>Contato</Link>
          <Link to='/company'>Empresa</Link>
          <Link to='/newProject'>Novo projeto</Link>
      </div> 

      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/company" element={<Company />} />
          <Route path="/newProject" element={<NewProject />} />
      </Routes>
      <p>Footer</p>     
    </Router>
  );
}

export default App;
