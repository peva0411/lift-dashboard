import React, {Component} from 'react';
import Topbar from './Topbar';
import Paper from '@material-ui/core/Paper'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { CssBaseline, TableRow, Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/core/styles/withStyles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableCell from '@material-ui/core/TableCell';
import { connectRouter } from 'connected-react-router';
import {connect} from 'react-redux';
import {fetchClient} from '../actions';
import { Link, withRouter } from 'react-router-dom';
import {Route, Switch} from 'react-router-dom';
import ClientList from './ClientList';
import IndicatorCardItem from './IndicatorCardItem';
import ProductsBelowMsrp from './ProductsBelowMsrp';
import ReviewList from './ReviewList';

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
    color: theme.palette.text.secondary,
    margin: 10
  },

  blockCenter: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center'
  }, 
  card:{
    minWidth: 275,
    minHeight:275
  }
});

class Client extends Component { 

  state = {
    selectedIndex:1
  };

  componentDidMount(){
    this.props.dispatch(fetchClient(this.props.match.params.clientId));
  }

  onIndicatorSelected = index => {
    const selectedIndex = {...this.state, selectedIndex: index};
    this.setState(selectedIndex);
  }

  render(){
    const {classes} = this.props;

    return (

     <Grid container justify="center">
      <Grid container className={classes.grid} justify="center" spacing={24}>
        <Grid item sm={12}>
          <Grid container justify="center">
            <Grid item sm={12}>
            <Typography align="left" style={{margin: 10}}  variant="headline">{this.props.client.name}</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item sm={4}>
         <IndicatorCardItem index={1} onIndicatorSelected={this.onIndicatorSelected} indicator={{index: 1, title: "Product Count", count:this.props.client.products.length, description:"Total product count"}}>

         </IndicatorCardItem>
        </Grid>
        <Grid item sm={4}>
        <IndicatorCardItem index={2} onIndicatorSelected={this.onIndicatorSelected} indicator={{index: 2, title: "Average Rating", count:this.props.client.averageReview, description:"Average star rating of reviews"}}>
        </IndicatorCardItem>
        </Grid>
        <Grid item md={4}>
        <IndicatorCardItem index={3} onIndicatorSelected={this.onIndicatorSelected} indicator={{index: 3, title: "Below MSRP", count:this.props.client.belowMsrpCount, description:"Count of client's products below MSRP"}}>
        </IndicatorCardItem>
        </Grid>
         
         <Grid item sm={12}>
         {this.state.selectedIndex === 1 && <ProductsBelowMsrp products={this.props.client.products}></ProductsBelowMsrp>}
         {this.state.selectedIndex === 2 && <ReviewList reviews={this.props.client.reviews}></ReviewList>}
         </Grid>
      </Grid>
      </Grid>

      
    );
  }
}

function mapStateToProps(state){
  return {
    clients: state.clients.clients,
    client: state.clients.client
  };
}

export default connect(mapStateToProps)(withStyles(styles)(Client));