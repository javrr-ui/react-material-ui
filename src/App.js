import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from "./Componentes/LoginForm"
import Home from "./home/Home"
import Crud from "./crud/Crud"
import Navbar from './Componentes/Navbar';
import Alta from "./Componentes/Alta"
import Baja from "./Componentes/Baja"
import Consulta from "./Componentes/Consulta"

function App() {
  return (
    <div className="App">
      
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path="/login" element={<LoginForm></LoginForm>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>

          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/crud" element={<Home></Home>}></Route>

          <Route path="/crud/alta" element={<Alta></Alta>}></Route>
          <Route path="/crud/baja" element={<Baja></Baja>}></Route>
          <Route path="/crud/consulta" element={<Consulta></Consulta>}></Route>
        </Routes>
  
      </Router>
    </div>
  );
}

export default App;
