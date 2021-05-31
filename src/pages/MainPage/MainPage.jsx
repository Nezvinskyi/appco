import { useHistory } from 'react-router';
import Container from '../../components/Container';
import MainFooter from '../../components/Footer/MainFooter';
import mobile from '../../images/mobile.png';
import './MainPage.scss';

const MainPage = () => {
  const history = useHistory();
  const handleClick = () => {
    history.push('/users-list');
  };

  return (
    <>
      <section className="hero-wrapper">
        <Container>
          <div className="hero">
            <div className="hero-wrapper-left">
              <h1 className="hero-title">
                <strong> Brainstorming</strong> for <br />
                desired perfect Usability
              </h1>
              <p className="hero-description">
                Our design projects are fresh and simple and will benefit <br />{' '}
                your business greatly. Learn more about our work!
              </p>
              <button onClick={handleClick} className="hero-btn">
                View Stats
              </button>
            </div>
            <div className="hero-wrapper-right">
              <div className="iphone">
                <img src={mobile} alt="" />
                {/* <div className="iphone-screen">
                <span>text</span>
              </div> */}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="offer">
        <Container>
          <h2 className="offer-title">
            Why{' '}
            <strong>
              small business owners <br /> love
            </strong>{' '}
            AppCo?
          </h2>
          <p className="offer-description">
            Our design projects are fresh and simple and will benefit your
            business <br /> greatly. Learn more about our work!
          </p>
        </Container>
      </section>

      <section className="features">
        <Container>
          <ul className="features-list">
            <li className="features-list-item icon-design">
              <h3 className="features-title">Clean Design</h3>
              <p className="features-description">
                Increase sales by showing true <br /> dynamics of your website.
              </p>
            </li>
            <li className="features-list-item icon-secure">
              <h3 className="features-title">Secure Data</h3>
              <p className="features-description">
                Build your online store’s trust using <br />
                Social Proof & Urgency.
              </p>
            </li>
            <li className="features-list-item icon-retina">
              <h3 className="features-title">Retina Ready</h3>
              <p className="features-description">
                Realize importance of social proof in <br />
                customer’s purchase decision.
              </p>
            </li>
          </ul>
        </Container>
      </section>
      <MainFooter />
    </>
  );
};

export default MainPage;
