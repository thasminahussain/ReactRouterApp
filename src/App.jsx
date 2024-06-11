import "./App.css";
import { Routes, Route } from "react-router-dom";
import Currencies from "./pages/Currencies";
import Price from "./pages/Price";
import Main from "./pages/Main";
import Navbar from "./Components/Navbar/indes";

function App() {
  return (
      <div>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/currencies" element={<Currencies/>}/>
          <Route path="/price/:symbol" element={<Price/>}/>
        </Routes>
      </div>
  
  );
}

export default App;
