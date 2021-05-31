import { Link } from 'react-router-dom';
import Container from '../Container';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="secondary-footer">
      <Container>
        <div className="footer-wrapper">
          <Link className="footer-logo" to="/">
            <p>AppCo</p>
          </Link>
          <p>All rights reserved by ThemeTags</p>

          <p>Copyrights © 2019. </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
