import Header from './components/header/Header'
import Intro from './components/intro/Intro'
import MainTitle from './components/MainTitle/MainTitle'

function App() {
  return (
    <div className='App'>
      <Header />
      <Intro title='Next generation digital banking' />
      <MainTitle title='Why choose Easybank ?' />
      <MainTitle title='Latest Articles' />
    </div>
  )
}

export default App
