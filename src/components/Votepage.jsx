import styles from '../styles/VotePage.module.css'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import {URL} from '../URL'


function VotePage(props){

  const navigate = useNavigate()

  const [numbers] = useState([1,2,3,4,5,6,7,8,9])

  function handleClick(e){
    fetch(`${URL}/vote`,{
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({number: e.target.value})
    })
    .then(response => response.json())
    .then((response) =>  props.setStatistic(response), navigate('/'))
  }

  return(
    <div className={styles.vote}>
      {numbers.map(num =>
      <input key={num} type='button' className={styles.number} value={num} onClick={(e)=>{handleClick(e)}}></input>
      )}
    </div>
  )
}

export default VotePage