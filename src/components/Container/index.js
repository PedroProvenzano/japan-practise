const Container = ({ children, width, height }) => {
  return (
    <div style={{ width: width, height: height }} className="containerMain">
      {children}
    </div>
  );
};

export default Container;
