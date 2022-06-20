import Container from "../../components/Container";
import NavButton from "../../components/NavButton";
import Display from "../../components/Display";

const Katakana = () => {
  return (
    <Container>
      <NavButton mode="home" />
      <h1>カタカナ</h1>
      <Display mode="kata" />
    </Container>
  );
};

export default Katakana;
