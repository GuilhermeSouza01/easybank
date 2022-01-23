import './header.css'

export default function Header() {
  return (
    <section className='header'>
      <div className='logo'>
        <img src='images/logo.png' alt='' />
      </div>

      <ul className='navigation'>
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
      <button className='requestButton'>Request invite</button>
    </section>
  )
}
