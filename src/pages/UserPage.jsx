import { connect } from 'react-redux';
import Chart from '../components/Chart';
import Container from '../components/Container';
import Footer from '../components/Footer/Footer';
import Navigation from '../components/Navigation';
import * as selectors from '../redux/selectors';

const UserPage = ({ views, clicks, first_name, last_name }) => (
  <>
    <Container>
      <Navigation />
      <h1 style={{ marginTop: '25px', marginBottom: '15px' }}>
        {first_name} {last_name}
      </h1>
      <Chart title="Views" data={views} dataKey="page_views" />

      <Chart title="Clicks" data={clicks} dataKey="clicks" />
    </Container>
    <Footer />
  </>
);

const mapStateToProps = state => ({
  first_name: selectors.getCurrentUserFirstName(state),
  last_name: selectors.getCurrentUserLastName(state),
  views: selectors.getUserViews(state),
  clicks: selectors.getUserClicks(state),
});

export default connect(mapStateToProps)(UserPage);
