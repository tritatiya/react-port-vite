import './App.css'
import Home from './components/home/Home'
import Portfolio from './components/portfolio/Portfolio'
import Sidebar from './components/sidebar/Sidebar'

function App() {

  return (
    <div className="app-container">
      <div className='sidebar-container'>
      <Sidebar/>
      </div>

      <main className="main">
          <Home/>
          <Portfolio/>
      </main>
    </div>
  )
}

export default App
