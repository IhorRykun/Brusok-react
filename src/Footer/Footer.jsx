import { Link } from "react-router-dom";
import { Container } from "../DivContainer/DivContainer";

export const Footer = () => {
  <footer>
    <Container>
      <nav>
        <ul>
          <li>
            <Link> Про нас </Link>
          </li>
          <li>
            <Link> Пиломатеріали</Link>
          </li>
          <li>
            <Link> Покрівельні роботи</Link>
          </li>
          <li>
            <Link>Доставка</Link>
          </li>
          <li>
            <Link>Контакти</Link>
          </li>
        </ul>
      </nav>
    </Container>
  </footer>;
};
