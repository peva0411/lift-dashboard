import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3
  }, 
  paper: {
    padding: theme.spacing.unit * 3,
    textAlign: 'left',
    color: theme.palette.text.secondary,
    marginTop: theme.spacing.unit * 1
  },
  itemContainer:{
    display: 'flex',
    alignItems: 'left',
    justifyContent: 'flex-start'
  }, 
  baseline:{
    alignSelf: 'baseline',
    marginLeft: theme.spacing.unit * 2
  },
  inline: {
    display: 'inline-block',
    marginLeft: theme.spacing.unit * 4

  }, 
  rating: {
    textAlign: 'center', 
    padding: '10px'
  }
});

function getRatingLabel(rating){
  return rating > 1 ? 'stars' : 'star';
}

function ReviewList(props){
  const {classes} = props;

  return (
    <Grid container justify="center" className={classes.root}>
      {props.reviews.map(review => (
        <Grid item xs={12}>
          <Paper className={classes.paper}>
          <div className={classes.itemContainer}>
            <div className={classes.rating}>
            <Typography variant='h2'>
                {review.rating}
              </Typography>
            <Typography> {getRatingLabel(review.rating)}
            </Typography>
            </div>
           <div className={classes.baseline}>
            <div className={classes.inline}>
              <Typography variant='subtitle1'>
                {review.productName}
              </Typography>
              
              <div>
                <Typography variant='subtitle2'>{review.formattedDate}</Typography>
              </div>
              <div>
              <Typography variant='caption'>{review.author}</Typography>
              </div>
              <div>
                <Typography variant='body2'>
                {review.text}
                </Typography>
              </div>
            </div>
           
           </div>
          </div>
            
           
           
            
            
          </Paper>
        </Grid>
        ))}
    </Grid>
  );
}

export default withStyles(styles)(ReviewList);