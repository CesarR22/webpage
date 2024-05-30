import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Login} from "/src/screens/Login/Login.jsx";
import {Home} from "/src/screens/Home/Home.jsx";

function App(){

  return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/home" element={<Home/>}/>
            </Routes>
        </BrowserRouter>
  );
}
export default App;