import React from 'react'
import Links from '../Atoms/Links'
import Text from '../Atoms/Text'

const Nav = () => {

    const linkObject = [
        {
            children: "Home"
        },

        {
            children: "Contact"
        },

        {
            children: "About us"
        }
    ]

  return (
    <nav className=' bg-sky-200 py-4 w-full fixed top-0 z-10 '>
        <div className='flex justify-between mx-auto' >
        <Text
            children = { "Pokedex" } 
        />

        <Links linkObject = { linkObject } clase = { ' m-2 w-full h-full hover:bg-indigo-400 transition-colors p-4' } />

        </div>
    </nav>
  )
}

export default Nav