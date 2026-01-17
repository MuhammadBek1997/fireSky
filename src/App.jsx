import './App.css'
import Footer from './pages/footer'
import Quest from './pages/Quest.jsx'
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
    <Quest/>
    <Footer />
    </div>
  )
}

export default App

