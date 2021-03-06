import React from 'react'
import './App.css'
import { Card, Chart, CountryPicker } from './components'

import styles from './App.module.css'
import { fetchData } from './api'

//Use class for App because of asynchronous data
class App extends React.Component {
  state = {
    data: {}
  }

  async componentDidMount() {
    const fetchedData = await fetchData()

    this.setState({ data: fetchedData})
  }

  render() {
    const { data } = this.state
    return (
      <div className={styles.container}>   
         <Card data={data} />
         <Chart />
         <CountryPicker />
      </div>
    )
  }
}

export default App
