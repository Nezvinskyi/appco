import { Link } from 'react-router-dom';
import Container from '../Container';
import './AppBar.scss';

const AppBar = () => (
  <header>
    <Container>
      <Link className="logo" to="/">
        <span>AppCo</span>
      </Link>
    </Container>
  </header>
);

export default AppBar;
