import logo from './logo.svg';
import './App.css';
import HomePage from './Pages/HomePage';
import Crops from './Pages/Crops';
import MarketPlace from './Pages/MarketPlace';
import ProductDetails from './Pages/ProductDetails/ProductDetails';
import News from './Pages/News';
import Policy from './Pages/Policy';
import PolicyDetails from './Pages/PolicyDetails/PolicyDetails';
import CropDetails from './Pages/CropDetails/CropDetails';


import { BrowserRouter ,Routes,Route } from 'react-router-dom';

function App() {

  // props for home component, loggedIn is a boolean
  const props = {
    loggedIn: true
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage {...props}/>}/>

          <Route path='/crops' element={<Crops {...props}/>}/>
          <Route path='/crops/:cropId' element={<CropDetails {...props}/>}/>

          {/* News */}
          <Route path='/news' element={<News {...props}/>}/>

          <Route path='/policies' element={<Policy/>}/>
          <Route path='policyDetails/:policyId' element={<PolicyDetails/>}/>

          {/* marketplace */}
          <Route path='/marketplace' element={<MarketPlace {...props}/>}/>
          <Route path='/product/:productId' element={<ProductDetails {...props}/>}/>

        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
