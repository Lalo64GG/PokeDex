import React from 'react'

const Button = ({ clase, children, evento}) => {
  return (
    <button className = { clase } onClick={evento}>
       { children }
    </button>
  )
}

export default Button