import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import TableCell from '@material-ui/core/TableCell';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto'
  }, 
  table: {
    minWidth: 700,
  },
  sectionHeader:{
    "text-align": "left"
  }
});

class ChangeEvents extends React.Component{

    state ={
        value: "1"
    };

    handleChange = (event, value) => {
        this.setState({value});
    };

    render(){
        const {classes} = this.props;
        return (
            <Paper className={classes.root}>
                <Tabs value={this.state.value}
                onChange={this.handleChange}
                indicatorColor="primary"
                textColor="primary"
                centered>
                    <Tab value="0" label="Price Changes"/>
                    <Tab value="1" label="Buy Box Changes"/>
                </Tabs>
                {this.state.value === '0' &&  <Table className={classes.table}>
                   <TableHead>
                       <TableRow>
                           <TableCell align="left">Client</TableCell>
                           <TableCell align="left">Product Name</TableCell>
                           <TableCell align="left">Asin</TableCell>
                           <TableCell align="right">Old Price</TableCell>
                           <TableCell align="right">New Price</TableCell>
                           <TableCell align="right">Date</TableCell>
                       </TableRow>
                   </TableHead>
                   <TableBody component="tbody">
                       {this.props.priceEvents.map(price => (
                           <TableRow key={price.asin} >
                            <TableCell align="left">{price.client}</TableCell>
                            <TableCell align="left">{price.productName}</TableCell>
                               <TableCell scope="row" component="th">
                                   {price.asin}
                               </TableCell>
                               <TableCell align="right">{price.oldPrice}</TableCell>
                               <TableCell align="right">{price.newPrice}</TableCell>
                               <TableCell align="right">{price.dateChanged}</TableCell>
                           </TableRow>
                       ))}
                   </TableBody>
               </Table>}
               {this.state.value === '1' && <Table className={classes.table}>
                  <TableHead>
                      <TableRow>
                      <TableCell align="left">Client</TableCell>
                           <TableCell align="left">Product Name</TableCell>
                          <TableCell align="left">Asin</TableCell>
                          <TableCell align="left">Old Owner</TableCell>
                          <TableCell align="left">New Owner</TableCell>
                          <TableCell align="right">Date</TableCell>
                      </TableRow>
                  </TableHead>
                  <TableBody component="tbody">
                      {this.props.ownerEvents.map(ownerEvent => (
                          <TableRow key={ownerEvent.asin} >
                           <TableCell align="left">{ownerEvent.client}</TableCell>
                            <TableCell align="left">{ownerEvent.productName}</TableCell>
                              <TableCell scope="row" component="th">
                                  {ownerEvent.asin}
                              </TableCell>
                              <TableCell align="left">{ownerEvent.oldOwner}</TableCell>
                              <TableCell align="left">{ownerEvent.newOwner}</TableCell>
                              <TableCell align="right">{ownerEvent.dateChanged}</TableCell>
                          </TableRow>
                      ))}
                  </TableBody>
              </Table>}
            </Paper>
        );
    }
}


  //return (
    //  <Grid>
    //   <Grid type="container">
    //       <Typography className={classes.sectionHeader} variant="h5" component="div">Price Changes</Typography>
    //       <Paper className={classes.root}>

    //           <Table className={classes.table}>
    //               <TableHead>
    //                   <TableRow>
    //                       <TableCell align="left">Asin</TableCell>
    //                       <TableCell align="right">Old Price</TableCell>
    //                       <TableCell align="right">New Price</TableCell>
    //                       <TableCell align="right">Date</TableCell>
    //                   </TableRow>
    //               </TableHead>
    //               <TableBody component="tbody">
    //                   {props.priceEvents.map(price => (
    //                       <TableRow key={price.asin} >
    //                           <TableCell scope="row" component="th">
    //                               {price.asin}
    //                           </TableCell>
    //                           <TableCell align="right">{price.oldPrice}</TableCell>
    //                           <TableCell align="right">{price.newPrice}</TableCell>
    //                           <TableCell align="right">{price.dateChanged}</TableCell>
    //                       </TableRow>
    //                   ))}
    //               </TableBody>
    //           </Table>
    //       </Paper>
    //       <Typography className={classes.sectionHeader} variant="h5" component="div">Buy Box Owner Change</Typography>
    //       <Paper className={classes.root}>
   
    //       </Paper>
//       </Grid>
  

//   );


export default withStyles(styles)(ChangeEvents);