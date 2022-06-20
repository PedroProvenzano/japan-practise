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
        <Route path="/japan-practise/" element={<Home />} />
        <Route path="/japan-practise/hiragana" element={<Hiragana />} />
        <Route path="/japan-practise/katakana" element={<Katakana />} />
      </Routes>
    </div>
  );
}

export default App;
