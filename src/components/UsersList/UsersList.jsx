import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
} from '@material-ui/core';

import { withStyles } from '@material-ui/styles';
import { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as operations from '../../redux/operations';
import * as selectors from '../../redux/selectors';

import './UsersList.scss';

const styles = () => ({
  table: {
    minWidth: 650,
    borderRadius: 16,
  },
  head: {
    color: '#ffffff',
    backgroundColor: '#3A80BA',
    overflow: 'hidden',
    borderRightColor: '#ffffff',
  },
  row: {
    cursor: 'pointer',
  },
});

const getUserStats = (data, id) => {
  return {
    views: data.reduce((acc, current) => {
      if (current.user_id === id) {
        return acc + current.page_views;
      } else return acc;
    }, 0),
    clicks: data.reduce((acc, current) => {
      if (current.user_id === id) {
        return acc + current.clicks;
      } else return acc;
    }, 0),
  };
};

class UsersList extends Component {
  state = { page: 0, rowsPerPage: 10 };

  componentDidMount() {
    this.props.changeCurrentUser({});
    this.props.fetchUsers();
  }

  handleChangePage = (event, newPage) => {
    this.setState({ ...this.state, page: newPage });
  };

  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: +event.target.value, page: 0 });
  };

  handleClick = e => {
    const id = Number(e.currentTarget.id);
    const first_name = e.currentTarget.getAttribute('first_name');
    const last_name = e.currentTarget.getAttribute('last_name');

    this.props.history.push(`/user-page/${id}`);

    this.props.changeCurrentUser({ id, first_name, last_name });
  };
  render() {
    const { page, rowsPerPage } = this.state;
    const { classes, users, stats } = this.props;
    return (
      <>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell className={classes.head}>id</TableCell>
                <TableCell className={classes.head}>First name</TableCell>
                <TableCell className={classes.head}>Last name</TableCell>
                <TableCell className={classes.head}>Email</TableCell>
                <TableCell align="center" className={classes.head}>
                  Gender
                </TableCell>
                <TableCell align="center" className={classes.head}>
                  IP address
                </TableCell>
                <TableCell align="center" className={classes.head}>
                  Total clients
                </TableCell>
                <TableCell align="center" className={classes.head}>
                  Total page views
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map(
                  ({
                    id,
                    first_name,
                    last_name,
                    email,
                    gender,
                    ip_address,
                  }) => {
                    const { views, clicks } = getUserStats(stats, id);

                    return (
                      <TableRow
                        style={{
                          backgroundColor: id % 2 === 0 ? '' : '#F1F1F1',
                        }}
                        key={id}
                        first_name={first_name}
                        last_name={last_name}
                        id={id}
                        onClick={this.handleClick}
                        className={classes.row}
                      >
                        <TableCell component="th" scope="row">
                          {id}
                        </TableCell>
                        <TableCell>{first_name}</TableCell>
                        <TableCell>{last_name}</TableCell>
                        <TableCell>{email}</TableCell>
                        <TableCell align="center">{gender}</TableCell>
                        <TableCell align="center">{ip_address}</TableCell>
                        <TableCell align="center">{views}</TableCell>
                        <TableCell align="center">{clicks}</TableCell>
                      </TableRow>
                    );
                  },
                )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25, 100]}
          component="div"
          count={users.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={this.handleChangePage}
          onChangeRowsPerPage={this.handleChangeRowsPerPage}
        />
      </>
    );
  }
}

const mapStateToProps = state => ({
  users: selectors.getAllUsers(state),
  stats: selectors.getAllStats(state),
});

const mapDispatchToProps = dispatch => ({
  changeCurrentUser: user => dispatch(operations.changeCurrentUser(user)),
  fetchUsers: () => dispatch(operations.fetchUsers()),
});

export default withStyles(styles)(
  withRouter(connect(mapStateToProps, mapDispatchToProps)(UsersList)),
);
