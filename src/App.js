import './App.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Main from './pages/Main'

function App() {
  return (
    <Router>
      <Route component={Main} />
    </Router>
  )
}

export default App
