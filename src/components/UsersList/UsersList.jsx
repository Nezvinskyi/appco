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

import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import users from '../../data/users.json';
import userStats from '../../data/users_statistic.json';

import './UsersList.scss';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    borderRadius: 16,
    // borderColor: '#ffffff',
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

const UsersList = () => {
  const classes = useStyles();
  const history = useHistory();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleClick = e => {
    const id = Number(e.currentTarget.id);
    const first_name = e.currentTarget.getAttribute('first_name');
    const last_name = e.currentTarget.getAttribute('last_name');

    history.push(`/user-page/${id}`, { id, first_name, last_name });
  };

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
                ({ id, first_name, last_name, email, gender, ip_address }) => {
                  const { views, clicks } = getUserStats(userStats, id);

                  return (
                    <TableRow
                      style={{ backgroundColor: id % 2 === 0 ? '' : '#F1F1F1' }}
                      key={id}
                      first_name={first_name}
                      last_name={last_name}
                      id={id}
                      onClick={handleClick}
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
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </>
  );
};

export default UsersList;
