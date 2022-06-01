import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./component/navbar/NavBar";
import FirstForm from "./pages/firstform/FirstForm";
import FirstFormikPage from "./pages/firstformikpage/FirstFormikPage";
import SecForm from "./pages/secform/SecForm";


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route  path="/" element={<FirstForm />}/>
        <Route path="/secform" element={<SecForm/>}/>
        <Route path="/firstformikpage" element={<FirstFormikPage/>}/>
      </Routes>
    </div>
  )  
}

export default App;
