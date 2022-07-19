import React from "react"
import { useState } from "react"
import styles from '../styles/LogsPage.module.css'


function LogsPage(props) {

  let [logs, setLogs] = useState([])

  React.useEffect(() => {
    setLogs(props.logs)
  }, [props])

  return (
    <ol className={styles.logs_block}>
      {logs.reverse().map(item =>
        <li key={item._id} className={styles.log_string}>${item.date}  {item.url}  {JSON.stringify(item.json)}</li>
      )}
    </ol>
  )
}

export default LogsPage