import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import FlightIcon from '../../../images/flight.svg';
import { SummaryMetadata } from './SummaryMetadata';
import { makeStyles } from '@material-ui/core';

export const FlightSummaryCard = props => {
  const { classes = useStyles(), totalPrice, tripType, flightClass, traveller } = props;
  return (
    <Card className={classes.root}>
      <Grid container>
        <Grid item xs={12} className={classes.padding}>
          <Grid container>
            <Grid item xs={5} className={classes.imgContainer}>
              <img src={FlightIcon} alt={'flight'} className={classes.image} />
            </Grid>
            <Grid item xs={7}>
              <SummaryMetadata
                totalPrice={totalPrice}
                tripType={tripType}
                flightClass={flightClass}
                traveller={traveller}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
};

const useStyles = makeStyles(theme => ({
  root: {
    borderRadius: theme.shape.borderRadius * 2,
    backgroundColor: theme.palette.primary[200]
  },
  padding: {
    padding: theme.spacing(1)
  },
  imgContainer: { height: '80px' },
  image: {
    maxWidth: '100%',
    maxHeight: '100%'
  }
}));
