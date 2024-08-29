import React from 'react'

const Buttons = ({label,className,navHandler}) => {
  return (
    <button className={className} onClick={navHandler}>{label}</button>
  )
}

export default Buttons