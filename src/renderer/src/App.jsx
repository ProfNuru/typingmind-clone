import './App.css'
import MainSection from './components/MainSection/MainSection'
import Sidebar from './components/Sidebar/Sidebar'

function App() {
  // const ipcHandle = () => window.electron.ipcRenderer.send('ping')

  return (
    <main>
      <Sidebar />
      <MainSection />
    </main>
  )
}

export default App
