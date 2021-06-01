import { Breadcrumbs } from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import * as selectors from '../../redux/selectors';
import './Navigation.scss';

const Navigation = ({ id, first_name, last_name }) => (
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

const mapStateToProps = state => ({
  id: selectors.getCurrentUserId(state),
  first_name: selectors.getCurrentUserFirstName(state),
  last_name: selectors.getCurrentUserLastName(state),
});

export default connect(mapStateToProps)(Navigation);
