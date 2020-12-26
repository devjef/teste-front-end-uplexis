import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './components/Home/index';
import SaibaMais from './components/SaibaMais/index';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/saiba-mais">
          <SaibaMais />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;