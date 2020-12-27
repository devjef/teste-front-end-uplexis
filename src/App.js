import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home'
import MoreInfo from './components/MoreInfo'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/saiba-mais">
          <MoreInfo />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;