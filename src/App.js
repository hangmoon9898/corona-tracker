import React from 'react'
import './App.css'
import { Card, Chart, CountryPicker } from './components'

import styles from './App.module.css'

class App extends React.Component {
  render() {
    return (
      <div className={styles.container}>   
         <Card />
         <Chart />
         <CountryPicker />
      </div>
    )
  }
}

export default App
