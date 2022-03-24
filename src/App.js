import React  from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter , Route, Routes} from "react-router-dom";
import LoginForm from './Components/LoginForm';
import ListForm1 from './Components/ListForm1';

function App() {
  return (
    <div className="App">
    
          <BrowserRouter>
          <Routes>
         <Route path="/"  element={<LoginForm/>}/>
         <Route path="/ListForm1"  element={<ListForm1/>}/>

          </Routes>
          </BrowserRouter>
        </div>
     
  );
}

export default App;