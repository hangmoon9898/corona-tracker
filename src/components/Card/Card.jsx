import React from "react";
import { Grid } from "@material-ui/core";
import styles from "./Card.module.css";
import SingleCard from "./components/SingleCard";

const Cards = ({
  data: { confirmed, recovered, deaths, lastUpdate, active },
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
          lastUpdate={lastUpdate}
        />
        <SingleCard
          className={styles.recovered}
          title="Recovered"
          number={recovered}
          lastUpdate={lastUpdate}
        />
        <SingleCard
          className={styles.active}
          title="Active"
          number={active}
          lastUpdate={lastUpdate}
        />
        <SingleCard
          className={styles.deaths}
          title="Deaths"
          number={deaths}
          lastUpdate={lastUpdate}
        />
      </Grid>
    </div>
  );
};

export default Cards;
