import React from "react";
import { Grid } from "@material-ui/core";
import styles from "./Card.module.css";
import SingleCard from "./components/SingleCard";

const Cards = ({
  data: { confirmed, deaths, lastChecked, active },
}) => {
  if (!confirmed) {
    return "Loading..";
  }

  return (
    <div className={styles.container}>
      <Grid container justify="center" spacing={3}>
        <SingleCard
          className={styles.infected}
          title="Infected"
          number={confirmed}
          lastChecked={lastChecked}
        />
        <SingleCard
          className={styles.active}
          title="Active"
          number={active}
          lastChecked={lastChecked}
        />
        <SingleCard
          className={styles.deaths}
          title="Deaths"
          number={deaths}
          lastChecked={lastChecked}
        />
      </Grid>
    </div>
  );
};

export default Cards;
