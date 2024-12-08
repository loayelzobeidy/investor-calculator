import { useState, useEffect } from "react";
import UserInput from "./components/UserInput";
import "bootstrap/dist/css/bootstrap.min.css";
import Logger from "./components/Logger";
import Header from "./components/Header";

function App() {
 
  return (
    <>
<Header/>
          <div className="container d-flex flex-column align-items-center mt-4">
            <UserInput/>
            <div className="mt-4 text-center">
              <Logger/>
            </div>
          </div>
    </>
  );
}

export default App;
