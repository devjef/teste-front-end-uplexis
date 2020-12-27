import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { BannerPrincipal } from './components/Banners'
import NavMenu from './components/NavMenu';
import Products from './components/Products';
import SaibaMais from './components/SaibaMais'


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Link to="/saiba-mais">
            <BannerPrincipal />
          </Link>
          <div className="container">
            <NavMenu />
            <Products />
          </div>
        </Route>
        <Route path="/saiba-mais">
          <SaibaMais />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;