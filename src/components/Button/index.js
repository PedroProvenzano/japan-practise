const Button = ({ text = "boton", evnt }) => {
  return (
    <div
      onClick={() => {
        evnt && evnt();
      }}
      className="buttonMain"
    >
      {text}
    </div>
  );
};

export default Button;
