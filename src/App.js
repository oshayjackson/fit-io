import React, { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import "bootstrap/dist/css/bootstrap.min.css";
import { loadFull } from "tsparticles";
import "./App.css";
import particlesOptions from "./particles.json";
import Card from "./components/card";

function App() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    if (init) {
      return;
    }

    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, [init]);

  return (
    <div className="App">
      {init && <Particles options={particlesOptions} />}
      <Card />
    </div>
  );
}

export default App;
