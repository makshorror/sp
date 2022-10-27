import React from "react";
import HeaderBlock from "./components/HeaderBlock";
import Main from "./components/Main";
import About from "./components/About";
import './style/App.css';
function App() {
  return (
    <div className="App">
      <HeaderBlock/>
      
      <Main/>

      <About/>

    </div>
  );
}

export default App;
