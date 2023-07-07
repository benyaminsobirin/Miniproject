import { useState } from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import Planets from "./component/pages/planets/Planets";
function App() {
  return (
    <>
      <Navbar />
      <Planets />
    </>
  );
}

export default App;
