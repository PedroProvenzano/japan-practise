import NavButton from "../../components/NavButton";
import Container from "../../components/Container";
import Display from "../../components/Display";

const Hiragana = () => {
  return (
    <Container>
      <NavButton mode="home" />
      <h1>ひらがな</h1>
      <Display mode="hira" />
    </Container>
  );
};

export default Hiragana;
