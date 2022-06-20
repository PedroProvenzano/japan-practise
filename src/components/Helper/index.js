import { useState } from "react";
import Button from "../Button";
import Switch from "react-switch";

const Helper = ({ letter, include, setInclude }) => {
  const [show, setShow] = useState(false);
  const [isChecked, setIsChecked] = useState({
    char: true,
    diac: false,
    digr: false,
  });

  const toggleShow = () => {
    setShow(!show);
  };

  const toggleChecked = (type) => {
    if (type === "char") {
      setIsChecked({ ...isChecked, char: !isChecked.char });
      setInclude({ ...include, char: !include.char });
    } else if (type === "diac") {
      setIsChecked({ ...isChecked, diac: !isChecked.diac });
      setInclude({ ...include, diac: !include.diac });
    } else {
      setIsChecked({ ...isChecked, digr: !isChecked.digr });
      setInclude({ ...include, digr: !include.digr });
    }
  };

  return (
    <div className="helperMain">
      <div className="sect">
        <Button evnt={toggleShow} text="Help" />
        {show ? letter : "**"}
      </div>
      <div className="sectCol">
        <div className="sect">
          <Switch
            uncheckedIcon={false}
            checkedIcon={false}
            onColor="#5f7161"
            onChange={() => {
              toggleChecked("char");
            }}
            checked={isChecked.char}
          />
          <p>Char</p>
        </div>
        <div className="sect">
          <Switch
            uncheckedIcon={false}
            checkedIcon={false}
            onColor="#5f7161"
            onChange={() => {
              toggleChecked("diac");
            }}
            checked={isChecked.diac}
          />
          <p>Diacritics</p>
        </div>
        <div className="sect">
          <Switch
            uncheckedIcon={false}
            checkedIcon={false}
            onColor="#5f7161"
            onChange={() => {
              toggleChecked("digr");
            }}
            checked={isChecked.digr}
          />
          <p>Digraphs</p>
        </div>
      </div>
    </div>
  );
};

export default Helper;
