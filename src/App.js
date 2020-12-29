import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home'
import About from './components/About'

function App() {

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/saiba-mais">
          <About />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;