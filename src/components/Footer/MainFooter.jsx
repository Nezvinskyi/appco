import { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from '../Container';
import './Footer.scss';

const MainFooter = () => {
  const [value, setValue] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    alert(
      `You have subscribed to the newsletter. We have sent you the confirmation mail to: ${value}`,
    );
    setValue('');
  };
  const handleChange = e => {
    setValue(e.target.value);
  };
  return (
    <footer className="main-footer">
      <Container>
        <form onSubmit={handleSubmit} className="form">
          <input
            className="form-input"
            type="email"
            value={value}
            onChange={handleChange}
            placeholder="Enter your email"
          />
          <button type="submit" className="form-btn">
            Subscribe
          </button>
        </form>
        <div className="footer-wrapper">
          <Link className="footer-logo" to="/">
            <p>AppCo</p>
          </Link>
          <p>All rights reserved by ThemeTags</p>
          <p>Copyrights © 2019</p>
        </div>
      </Container>
    </footer>
  );
};

export default MainFooter;
