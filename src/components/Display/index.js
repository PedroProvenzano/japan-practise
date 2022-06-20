import Letter from "../Letter";
import Hiragana from "../../data/Hiragana.json";
import Katakana from "../../data/Katakana.json";
import Helper from "../Helper";
import { useState } from "react";

const Display = ({ mode }) => {
  const [helpLetter, setHelpLetter] = useState("");
  const [include, setInclude] = useState({
    char: true,
    diac: false,
    digr: false,
  });

  const modeCheck = () => {
    switch (mode) {
      case "kata":
        return Katakana;
      case "hira":
        return Hiragana;
      default:
        return;
    }
  };

  return (
    <div className="displayMain">
      <Letter letters={modeCheck()} setHelp={setHelpLetter} include={include} />
      <Helper letter={helpLetter} setInclude={setInclude} include={include} />
    </div>
  );
};

export default Display;
