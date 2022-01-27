import MainTitle from '../MainTitle/MainTitle'
import './intro.css'

export default function Intro({ title }) {
  return (
    <main>
      <section className='intro'>
        <div className='detailsIntro'>
          <h1>{title}</h1>
          <p>
            take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </p>
          <button className='requestButton'>Request invite</button>
        </div>
        <div className='imgIntro'>
          <img src='images/image-mockups.png' alt='' />
        </div>
      </section>
    </main>
  )
}
