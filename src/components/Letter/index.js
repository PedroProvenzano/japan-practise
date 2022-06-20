import { useState } from "react";
import { IoPlayCircleOutline } from "react-icons/io5";

const Letter = ({ letters, setHelp, include }) => {
  const [letter, setLetter] = useState(<IoPlayCircleOutline />);

  const getRandomChar = () => {
    let newLetter = letter;
    while (newLetter === letter) {
      newLetter = letters[Math.round(Math.random() * (letters.length - 1))];
      if (newLetter.type === "char" && !include.char) newLetter = letter;
      if (newLetter.type === "diac" && !include.diac) newLetter = letter;
      if (newLetter.type === "digr" && !include.digr) newLetter = letter;
      if (!include.char && !include.diac && !include.digr)
        newLetter = { let: "*", roma: "*" };
    }
    setLetter(newLetter.let);
    setHelp(newLetter.roma);
  };

  return (
    <div onClick={getRandomChar} className="letterMain">
      {letter}
    </div>
  );
};

export default Letter;
