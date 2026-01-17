import './App.css'
import Ticket from './page/Ticket'
import Write from "./pages/writer";
import Festival from './pages/festival'
import Header from './pages/Header'

function App() {

  return (

    <div>
    <Header/>
      <Festival />
    <Write/>
    <Ticket/>
    </div>
  )
}

export default App

