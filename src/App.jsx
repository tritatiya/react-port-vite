import './App.css'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Home from './components/home/Home'
import Portfolio from './components/portfolio/Portfolio'
import Resume from './components/resume/Resume'
import Sidebar from './components/sidebar/Sidebar'

function App() {

  return (
    <div className="app-container">
      <div className='sidebar-container'>
      <Sidebar/>
      </div>

      <main className="main">
          <Home/>
          <About/>
          <Resume/>
          <Portfolio/>
          <Contact/>
      </main>
    </div>
  )
}

export default App
