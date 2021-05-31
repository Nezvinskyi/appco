import { useHistory } from 'react-router';
import Chart from '../components/Chart';
import Container from '../components/Container';
import Footer from '../components/Footer/Footer';
import Navigation from '../components/Navigation';
import users from '../data/users.json';
import userStats from '../data/users_statistic.json';

const getUser = userId => users.find(({ id }) => id === userId);
const getUserStats = userId =>
  userStats.filter(({ user_id }) => user_id === userId);

const UserPage = () => {
  const history = useHistory();
  const { id } = history.location?.state;
  const { first_name, last_name } = getUser(id);

  const userStats = getUserStats(id);

  const userViews = [];
  userStats.forEach(({ date, page_views }) => {
    userViews.push({ date, page_views });
  });

  const userClicks = [];
  userStats.forEach(({ date, clicks }) => {
    userClicks.push({ date, clicks });
  });

  return (
    <>
      <Container>
        <Navigation />
        <h1 style={{ marginTop: '25px', marginBottom: '15px' }}>
          {first_name} {last_name}
        </h1>
        <Chart title="Views" data={userViews} dataKey="page_views" />

        <Chart title="Clicks" data={userClicks} dataKey="clicks" />
      </Container>
      <Footer />
    </>
  );
};

export default UserPage;
