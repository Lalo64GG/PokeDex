import Links from "../Atoms/Links"
import Text from "../Atoms/Text"

const Footer = () => {
    const linkObjetc1 = [ 
        {
            children : 'Branding' 
        },
        {
            children : 'Design' 
        },
        {
            children : 'Marketing' 
        },
        {
            children : 'Advertisement' 
        }
    ]

    const linkObjetc2 = [ 
        {
            children : 'About us' 
        },
        {
            children : 'Contact' 
        },
        {
            children : 'Jobs' 
        },
        {
            children : 'Press kit' 
        }
    ]

    const linkObjetc3 = [ 
        {
            children : 'Terms of use' 
        },
        {
            children : 'Privacy policy' 
        },
        {
            children : 'Jobs' 
        },
        {
            children : 'Cookie polic' 
        }
    ]


  return (

    <footer className="footer p-10 bg-neutral text-neutral-content">
  <nav className="mx-16" >
    <header className="footer-title"> 
        <Text children = { 'Services' }/> 
    </header>
        <Links linkObject = { linkObjetc1 } clase = { ' py-1  block link link-hover' } />
  </nav> 
  <nav>
    <header className="footer-title">
        <Text children = { `Company` } />
    </header> 
        <Links linkObject = { linkObjetc2 } clase = { ' py-1 block link link-hover' } />
  </nav> 
  <nav>
    <header className="footer-title">
        <Text children = { 'Legal' } />
    </header> 
    <Links linkObject = { linkObjetc3 } clase = { ' py-1 block link link-hover' } />
  </nav>
</footer>
  )
}

export default Footer