import React, {Component} from 'react';
import Topbar from './Topbar';
import Paper from '@material-ui/core/Paper'
import { CssBaseline, TableRow } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/core/styles/withStyles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableCell from '@material-ui/core/TableCell';
import { connectRouter } from 'connected-react-router';
import {connect} from 'react-redux';
import {fetchClients} from '../actions';
import { Link, withRouter } from 'react-router-dom';

const backgroundShape = require('../images/shape.svg');

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.grey['100'],
    overflow: 'hidden',
    background: `url(${backgroundShape}) no-repeat`,
    backgroundSize: 'cover',
    backgroundPosition: '0 400px',
    paddingBottom: 200
  },
  table:{
    minWidth: 700
  },
  grid: {
    width: 1200,
    margin: `0 ${theme.spacing.unit * 2}px`,
    [theme.breakpoints.down('sm')]: {
      width: 'calc(100% - 20px)'
    }
  },

  loadingState: {
    opacity: 0.05
  },
  paper: {
    padding: theme.spacing.unit * 3,
    textAlign: 'left',
    color: theme.palette.text.secondary
  },

  blockCenter: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center'
  }
});

class ClientList extends Component { 

  componentDidMount(){
    this.props.dispatch(fetchClients());
  }

  render(){
    const {classes} = this.props;

    return (
      <Grid container justify="center">
      <Grid container spacing={24} justify="center" className={classes.grid}>
        <Grid item xs={12}>
        <Paper className={classes.mainPaper}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell align="left">Client</TableCell>
              <TableCell align="right">Product Count</TableCell>
            </TableRow>
          </TableHead>
          <TableBody component="tbody">
            {this.props.clients.map(client => (
              <TableRow key={client.clientId}>
                <TableCell align="left" scope="row">
                <Link to={`clients/${client.clientId}`}>
                {client.name}
                </Link></TableCell>
                <TableCell align="right">{client.productCount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
       </Paper>
        </Grid>
      </Grid>
      </Grid>
    );
  }
}

function mapStateToProps(state){
  return {
    clients: state.clients.clients
  };
}

export default connect(mapStateToProps)(withStyles(styles)(ClientList));