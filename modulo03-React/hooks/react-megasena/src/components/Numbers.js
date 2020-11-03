import React from 'react'
import Number from '../Number'


export default function Numbers({numbers}) {
  return (
    <div>
      {numbers.map(number => {
        return (
          < Number key={number.id}/>
        )
      })}
    </div>
  )
}
