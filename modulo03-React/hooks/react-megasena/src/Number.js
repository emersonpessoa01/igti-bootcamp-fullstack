import React from 'react'

export default function Number({number}) {
  const{description, value, count} = number;

  return (
    <div>
      <span>{description}</span>
      <span>{count}</span>
    </div>
  )
}
