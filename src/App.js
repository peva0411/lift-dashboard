import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import {connect} from 'react-redux';
import {Route, Switch} from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Products from './components/Products';
import Clients from './components/Clients';
import Layout from './components/Layout';
import {fetchIndicators} from './actions';
import './App.css';
import { blue, indigo } from '@material-ui/core/colors'

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: blue[900]
    },
    primary: {
      main: indigo[700]
    }
  },
  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '"Lato"',
      'sans-serif'
    ].join(',')
  }
});

class App extends Component {

  // componentDidMount(){
  //   this.props.dispatch(fetchIndicators());
  // }

  render() {
    return (
      <div className="App">
      <MuiThemeProvider theme={theme}>
        <Layout>
          <Route exact path="/" component={Dashboard}/>
          <Route path="/products" component={Products}/>
          <Route path="/clients" component={Clients}/>
        </Layout>
      </MuiThemeProvider>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    indicators: state.dashboard.indicators
  }
}

export default App;
