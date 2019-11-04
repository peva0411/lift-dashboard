import React, { Component, Fragment } from 'react';
import IndicatorCardItem from './IndicatorCardItem';
import withStyles from '@material-ui/core/styles/withStyles';
import Paper from '@material-ui/core/Paper';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import { fetchIndicators, fetchClients, indicatorSelected, clientFilterSelected } from '../actions';
import ReviewList from "./ReviewList";
import Topbar from './Topbar';
import Products from './Products';
import ProductsBelowMsrp from './ProductsBelowMsrp';
import ChangeEvents from './ChangeEvents';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { Input } from '@material-ui/core';



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
  rangeLabel: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: theme.spacing.unit * 2
  },
  topBar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  outlinedButtom: {
    textTransform: 'uppercase',
    margin: theme.spacing.unit
  },
  actionButtom: {
    textTransform: 'uppercase',
    margin: theme.spacing.unit,
    width: 152,
    height: 36
  },
  blockCenter: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center'
  },
  block: {
    padding: theme.spacing.unit * 2,
  },
  loanAvatar: {
    display: 'inline-block',
    verticalAlign: 'center',
    width: 16,
    height: 16,
    marginRight: 10,
    marginBottom: -2,
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main
  },
  interestAvatar: {
    display: 'inline-block',
    verticalAlign: 'center',
    width: 16,
    height: 16,
    marginRight: 10,
    marginBottom: -2,
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.light
  },
  inlining: {
    display: 'inline-block',
    marginRight: 10
  },
  buttonBar: {
    display: 'flex'
  },
  noBorder: {
    borderBottomStyle: 'hidden'
  },
  mainBadge: {
    textAlign: 'center',
    marginTop: theme.spacing.unit * 4,
    marginBottom: theme.spacing.unit * 4
  }
});


class Dashboard extends Component {

  componentDidMount() {
    console.log(this.props.selectedClientId);
    this.props.dispatch(fetchIndicators(this.props.selectedClientId));
    this.props.dispatch(fetchClients());
  }

  onIndicatorSelected = (index) => {
    this.props.dispatch(indicatorSelected(index));
  };

  onClientSelected = (event) => {
    console.log(event.target.value);
    this.props.dispatch(fetchIndicators(event.target.value));
    this.props.dispatch(clientFilterSelected(event.target.value));
  };

  render() {
    const { classes } = this.props;

    return (
      <Grid container justify="center">
        <Grid spacing={24} alignItems="center" justify="center" container className={classes.grid}>

          <Grid item xs={12}>
            <form style={{ textAlign: "left" }}>
              <FormControl>
                <InputLabel htmlFor="client">Client</InputLabel>
                <Select value={this.props.selectedClientId}
                  name="client"
                  onChange={this.onClientSelected}
                  autoWidth
                >
                  <MenuItem value="0">
                    <em>All</em>
                  </MenuItem>
                  {this.props.availableClients.map((client, index) => (
                    <MenuItem value={client.clientId}>{client.name}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </form>
          </Grid>


          {this.props.indicators.map((indicator, index) => (
            <Grid key={index} item xs={12} md={4}>
              <IndicatorCardItem indicator={indicator} index={index} onIndicatorSelected={this.onIndicatorSelected}></IndicatorCardItem>
            </Grid>
          ))}
          <Grid item xs={12}>
            {this.props.selectedIndicatorIndex === 0 && <ProductsBelowMsrp products={this.props.products}></ProductsBelowMsrp>}
            {this.props.selectedIndicatorIndex === 1 && <ChangeEvents priceEvents={this.props.changeEvent.productPriceChangeEvents}
              ownerEvents={this.props.changeEvent.buyBoxOwnerChangeEvents} ></ChangeEvents>}
            {this.props.selectedIndicatorIndex === 2 && <ReviewList reviews={this.props.badReviews}></ReviewList>}
          </Grid>
        </Grid>

      </Grid>
    );
  }
}

function mapStateToProps(state) {
  return {
    indicators: state.dashboard.indicators,
    selectedClientId: state.dashboard.selectedClientId,
    availableClients: state.clients.clients,
    selectedIndicatorIndex: state.dashboard.selectedIndicatorIndex,
    products: state.dashboard.products,
    badReviews: state.dashboard.badReviews,
    changeEvent: state.dashboard.changeEvent
  };
}

export default connect(mapStateToProps)(withStyles(styles)(Dashboard));