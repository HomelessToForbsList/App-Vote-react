import { useState } from 'react';
import './App.css';
import { Route, Routes, } from 'react-router-dom';
import MainPage from './components/MainPage';
import VotePage from './components/Votepage';
import LogsPage from './components/LogsPage';
import {URL} from './URL'



function App() {

  let [statistic, setStatistic] = useState([])
  let [logList, setLogList] = useState([])

  function fetchStatistic(date) {
    date = date.replace(/\.\//g, '-')
    fetch(`${URL}/statistic?date=${date}`)
      .then(response => response.json())
      .then(res => setStatistic(res))
  }

  function fetchLogs() {
    fetch(`${URL}/logs`)
      .then(response => response.json())
      .then(res => setLogList(res))
  }


  return (
    <div className="App">
      <h1>Vote for your favorite number!</h1>
      <Routes>
        <Route path='/' element={<MainPage data={statistic} fetchStatistic={fetchStatistic} fetchLogs={fetchLogs} />} />
        <Route path='/vote' element={<VotePage setStatistic={setStatistic} />} />
        <Route path='/logs' element={<LogsPage logs={logList} />} />
      </Routes>
    </div>
  );
}

export default App;
