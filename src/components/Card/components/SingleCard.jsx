import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import CountUp from "react-countup";
import styles from "./SingleCard.module.css";
import cx from "classnames";

const SingleCard = (props) => {
  return (
    <Grid
      item
      xs={12}
      md={2}
      component={Card}
      className={cx(styles.card, props.className)}
    >
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          {props.title}
        </Typography>
        <Typography variant="h5">
          <CountUp
            start={0}
            end={props.number}
            duration={2}
            separator=" "
          />
        </Typography>
        <Typography color="textSecondary" gutterBottom>
          {new Date(props.lastChecked).toDateString()}
        </Typography>
      </CardContent>
    </Grid>
  );
};

export default SingleCard;
