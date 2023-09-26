import React from 'react'

const Links = ( { linkObject, clase } ) => {
  return (
    <div>
      {
        linkObject.map( (links) => (
          <a className = { clase } key={ links.children } > { links.children } </a>
        ) )
      }
    </div>
  )
}

export default Links