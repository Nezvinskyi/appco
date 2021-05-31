import { Breadcrumbs } from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { NavLink, useLocation } from 'react-router-dom';
import './Navigation.scss';

const Navigation = () => {
  const location = useLocation();
  const id = location?.state?.id;
  const first_name = location?.state?.first_name;
  const last_name = location?.state?.last_name;

  return (
    <Breadcrumbs
      style={{ paddingTop: '15px' }}
      separator={<NavigateNextIcon fontSize="small" />}
    >
      <NavLink className="link" activeClassName="link-active" exact to="/">
        Main page
      </NavLink>
      <NavLink className="link" activeClassName="link-active" to="/users-list">
        User statistics
      </NavLink>
      {id && (
        <NavLink className="link" activeClassName="link-active" to="/user-page">
          {`${first_name} ${last_name}`}
        </NavLink>
      )}
    </Breadcrumbs>
  );
};

export default Navigation;
