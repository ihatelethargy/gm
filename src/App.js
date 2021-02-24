import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from 'react-router-dom'
import Main from './pages/Main'
import Profile from './components/Profile'

function App() {
  return (
    <Router>
      <Route component={Main} exact />
    </Router>
  )
}

export default App
