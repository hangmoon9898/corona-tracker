import React from "react";
import "./App.css";
import { Card, Chart, CountryPicker } from "./components";

import styles from "./App.module.css";
import { fetchData } from "./api";
import logo from "./images/covid-tracker-logo.png";

//Use class for App because of asynchronous data
class App extends React.Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country });
  };

  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <img src={logo} alt="Covid tracker" className={styles.image} />
        <Card data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;
