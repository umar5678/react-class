import React from 'react'

const ForcastCard = ({day , temHi, temLow}) => {
// props obj = { all props valuse comma spearated}
  return (
    <div className='border rounded p-2 m-2 '>

        <h1>{day}</h1>
        <p>{temHi}</p>
        <p>{temLow}</p>
    </div>
  )
}

export default ForcastCard