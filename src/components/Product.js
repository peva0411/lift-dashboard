import React, {Component} from 'react';
import {fetchProductDetails} from '../actions';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from "@material-ui/core/Grid";

class Product extends Component {



    componentDidMount() {
        console.log('Product did mount');
        this.props.dispatch(fetchProductDetails(this.props.match.params.productId));
    }



    render() {
        return (
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Paper>
                    <Typography variant="h5" component="h3">
                        {this.props.productDetails.productTitle}
                    </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper>
                        <Typography variant="h5" component="h3">
                            Bullet Points
                        </Typography>
                        <List dense="true">
                            {this.props.productDetails.bulletPoints.map((item, index) => (
                                <ListItem>
                                    <ListItemText
                                        primary={item.text}>

                                    </ListItemText>
                                </ListItem>
                            ))}
                        </List>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper>
                    <Typography variant="h5" component="h3">
                            Description
                    </Typography>
                        <p>
                            {this.props.productDetails.description}
                    </p>
                    </Paper>
                    
                </Grid>
            </Grid>

           
            

            // <div>
            //     <div>{this.props.productDetails.asin}</div>
            //     <div>{this.props.productDetails.productTitle}</div>
            //     <div>{this.props.match.params.productId}</div>
            // </div>

        );
    }
}

function mapStateToProps(state){
    return {
        productDetails: state.products.productDetails
    }
}

export default connect(mapStateToProps)(Product);