import { BannerPrincipal } from './components/Banners'
import NavMenu from './components/NavMenu';
import Products from './components/Products';

function App() {
  return (
    <>
     <BannerPrincipal />
     
     <div className="container">
      <NavMenu />
      <Products />
     </div>
    
    </>
  );
}

export default App;