import React from 'react'
import ForcastCard from './components/ForcastCard'

const Day2 = () => {
  return (
    <div>
        <ForcastCard day="mon" temHi="22" temLow="10" />
        <ForcastCard day="Tues" temHi="22" temLow="10" />
        <ForcastCard day="Wed" temHi="22" temLow="10" />
        <ForcastCard day="Thr" temHi="22" temLow="10" />
    </div>
  )
}

export default Day2