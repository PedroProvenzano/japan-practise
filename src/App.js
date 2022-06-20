//import "./style/App.scss";
import "./sass/style.scss";
import Home from "./layouts/Home";
import Hiragana from "./layouts/Hiragana";
import Katakana from "./layouts/Katakana";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hiragana" element={<Hiragana />} />
        <Route path="/katakana" element={<Katakana />} />
      </Routes>
    </div>
  );
}

export default App;
