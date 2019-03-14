import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import TableCell from '@material-ui/core/TableCell';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto'
  }, 
  table: {
    minWidth: 700,
  }
});

function ProductsBelowMsrp(props){
  const {classes} = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Client</TableCell>
            <TableCell align="right">Asin</TableCell>
            <TableCell align="left">Product</TableCell>
            <TableCell align="right">MSRP</TableCell>
            <TableCell align="right">Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody component="tbody">
          {props.products.map(product => (
            <TableRow key={product.asin} >
              <TableCell scope="row" component="th">
                {product.client}
              </TableCell>
              <TableCell align="right">{product.asin}</TableCell>
              <TableCell align="left">{product.name}</TableCell>
              <TableCell align="right">{product.msrp}</TableCell>
              <TableCell align="right">{product.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default withStyles(styles)(ProductsBelowMsrp);