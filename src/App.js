import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from 'react-router-dom'
import Main from './pages/Main'

function App() {
  return (
    <Router>
      <Route component={Main} exact />
      {/* <Route component={}> */}
    </Router>
  )
}

export default App
