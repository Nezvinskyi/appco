import { Switch, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import UsersListPage from './pages/UsersListPage';
import UserPage from './pages/UserPage';
import AppBar from './components/AppBar/AppBar';

const App = () => {
  return (
    <>
      <AppBar />
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/users-list" component={UsersListPage} />
        <Route path="/user-page" component={UserPage} />
      </Switch>
    </>
  );
};

export default App;
