import { IoArrowBackOutline, IoHomeSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const NavButton = ({ text, icon, mode = "def" }) => {
  const buttonMode = () => {
    switch (mode) {
      case "back":
        return <IoArrowBackOutline className="buttonIcon" />;
      case "home":
        return <IoHomeSharp className="buttonIcon" />;
      default:
        return <p>{text}</p>;
    }
  };

  const home = { position: "absolute", top: "5%", left: "5%" };

  return (
    <div style={mode === "home" ? home : {}} className="navButtonMain">
      <Link className="linkFormat" to="/japan-practise/">
        {icon && icon}
        {buttonMode()}
      </Link>
    </div>
  );
};

export default NavButton;
