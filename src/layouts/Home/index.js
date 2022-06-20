import { Link } from "react-router-dom";
import Container from "../../components/Container";
const Home = () => {
  return (
    <Container>
      <h1 className="title">おはよう</h1>
      <ul className="listContainer">
        <li>
          {" "}
          <Link className="Links" to="hiragana">
            ひらがな
          </Link>
        </li>
        <li>
          <Link className="Links" to="katakana">
            カタカナ
          </Link>
        </li>
        <li>カンジ</li>
      </ul>
    </Container>
  );
};

export default Home;
