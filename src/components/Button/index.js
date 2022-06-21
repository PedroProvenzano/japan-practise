const Button = ({ text = "boton", evnt, on, off }) => {
  return (
    <div
      onClick={() => {
        evnt && evnt();
      }}
      onMouseDown={() => {
        on && on();
      }}
      onMouseUp={() => {
        off && off();
      }}
      className="buttonMain"
    >
      {text}
    </div>
  );
};

export default Button;
