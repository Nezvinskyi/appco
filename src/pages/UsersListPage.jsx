import Navigation from '../components/Navigation';
import Container from '../components/Container';
import Footer from '../components/Footer/Footer';
import UsersList from '../components/UsersList/UsersList';

const UsersListPage = () => {
  return (
    <>
      <Container>
        <Navigation />
        <h1 style={{ marginTop: '25px', marginBottom: '15px' }}>
          Users statistics
        </h1>
        <UsersList />
      </Container>
      <Footer />
    </>
  );
};

export default UsersListPage;
