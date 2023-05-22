import "./App.css";
import Palette from "./components/Palette";
import { useEffect, useState } from "react";
import { init, subscribe } from "./socketApi";
function App() {
  const [activeColor, setActiveColor]= useState('#282c34')
  useEffect(() => {
    init();
    subscribe((color)=>
    setActiveColor(color)
    );
  }, []);
  return (
    <div className="App" style={{backgroundColor: activeColor}}>
      <Palette />
    </div>
  );
}

export default App;
