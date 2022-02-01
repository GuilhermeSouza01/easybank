import { useState, useRef, useEffect } from 'react'
import { FaBars } from 'react-icons/fa'
import './navbar.css'

export default function Navbar() {
  const [show, setShow] = useState(false)
  const refDivContainer = useRef(null)
  const linksRef = useRef(null)

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height
    if (show) {
      refDivContainer.current.style.height = `${linksHeight}px`
    } else {
      refDivContainer.current.style.height = '0'
    }
  }, [show])

  return (
    <nav className='nav'>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src='images/logo.png' alt='logo' />
          <button onClick={() => setShow(!show)} className='nav-toggle'>
            <FaBars />
          </button>
        </div>

        <div className='links-container' ref={refDivContainer}>
          <ul className='links' ref={linksRef}>
            <li>
              <a href='/#'>Home</a>
            </li>
            <li>
              <a href='/#'>About</a>
            </li>
            <li>
              <a href='/#'>Contact</a>
            </li>
            <li>
              <a href='/#'>Blog</a>
            </li>
            <li>
              <a href='/#'>Careers</a>
            </li>
          </ul>
        </div>
        <button className='nav-btn'>Request invite</button>
      </div>
    </nav>
  )
}
