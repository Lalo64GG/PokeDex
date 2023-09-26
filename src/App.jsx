import { useState } from 'react'
import Header from './Organims/Header'
import Main from './Organims/Main'
import Footer from './Organims/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header className=' w-full '>
        <Header/>
      </header>

      <main className=''>
        <Main/>
      </main>

      <footer>
        <Footer/>
      </footer>
      
    </>
  )
}

export default App
