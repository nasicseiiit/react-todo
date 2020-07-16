import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Todo from "./components/Todo";
function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Navbar/>
      <Route path= '/Todo' component={Todo}/>
    </div>
    </BrowserRouter>
  );
}

export default App;
