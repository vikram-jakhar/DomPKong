import './App.css'
import Header from './components/Header'
import Sec2 from './components/Sec2'
import Sec3 from './components/Sec3'
import Sec4 from './components/Sec4'
import Sec5 from './components/Sec5'
import Sec6 from './components/Sec6'
import Sec7 from './components/Sec7'
import Sec8 from './components/Sec8'
import Loder from './components/Loder'
import Backtotop from './components/Backtotop'
import Roadmap from './components/Roadmap'

function App() {

  return (
    <>
      <div className='bg-header'>
        <Header />
      </div>
      <Sec2 />
      <Sec3 />
      <Sec4 />
      <div className='bg-img-bottal flex justify-center items-center overflow-hidden relative'>
          <Sec5 />
      </div>
      <Roadmap/>
      <Sec6 />
      <Sec7 />
      <div className='accordion-bg relative overflow-hidden z-[1]'>
        <Sec8 />
      </div>
      <Loder />
      <Backtotop />

    </>
  )
}

export default App
