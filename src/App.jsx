import './App.css'
import Card from './components/Card'
import loading from './assets/giphy.gif'
import Loader from './loader.js'

function App() {
  return (
    <>

      <div className="loader">
        <img src={loading} alt="" />
        <Loader></Loader>
      </div>
      <Card></Card>
    </>
  )
}

export default App