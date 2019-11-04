import React, {Component} from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Paper from '@material-ui/core/Paper'
import { Typography } from '@material-ui/core';

const styles = theme => ({
  paper: {
    padding: theme.spacing.unit * 3,
    textAlign: 'left',
    color: theme.palette.text.secondary
  },
  blockCenter: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center'
  },
  errorText:{
    color:'red'
  }
});

class IndicatorCardItem extends Component{

  handleClicked = e => {
    //console.log(this.props.index);
    this.props.onIndicatorSelected(this.props.index);
  };

  render(){
    const { classes } = this.props;

    return(
     <Paper className={classes.paper} onClick={this.handleClicked}>
        <div>
          <Typography variant="subtitle1" gutterBottom>
            {this.props.indicator.title}
          </Typography>
          <div className={classes.blockCenter}>
            <Typography color='secondary'  variant='h2' gutterBottom>
              {this.props.indicator.count}
            </Typography>
          </div>
          <div>
          <Typography variant="body2">
                     {this.props.indicator.description}
                    </Typography>
          </div>
        </div>
     </Paper>
    );
  }
  
  
}

export default withStyles(styles)(IndicatorCardItem);