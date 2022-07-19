import styles from '../styles/MainPage.module.css'
import { Link } from 'react-router-dom'
import Chart from './Chart'
import { useState } from 'react'

function MainPage(props){

  let [date, setDate] = useState('')


  function addDate(e){
    setDate(e.target.value)
  }

  return(
    <div className={styles.main}>
      <div className={styles.input_block}>
        <input 
          type='text' 
          className={styles.input} 
          placeholder='Select a date to view statistics' 
          value={date} 
          onChange={(e) => addDate(e)}>
        </input>
        <button className={styles.get_stat} onClick={()=> props.fetchStatistic(date)}>
          <p>Get statistic</p>
        </button>
      </div>
      <Link to='/vote'>
        <button className={styles.btn}>I want to vote</button>
      </Link>
      <Link to='/logs'>
        <button className={styles.btn} onClick={()=> props.fetchLogs(date)}>Show Logs</button>
      </Link>
      <div className={styles.chart_wrapper}>
      <Chart data={props.data}/>
      </div>
    </div>
  )
}

export default MainPage