// Import necessary styles and components
import NavBar from './components/NavBar';
import './components/clientlib.lc-24d20b882fe42cfd30d27f8d09c7c9a1-lc.min.css';
import './components/clientlib-site.lc-86f5070d7ecb6071c3c22450841c0d53-lc.min.css';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Brands from './pages/Brands';
import Ingredients from './pages/Ingredients';
import Sustainability from './pages/Sustainability';
import Innovation from './pages/Innovation'
import Newsroom from './pages/Newsroom'
import { Route, Routes } from 'react-router-dom';
// Importing neccessary javasript files and css files from components and pages folder.

function App() {
  // creating a function to route other javascript files

  return (
    <div>
      <NavBar /> 

        <Routes>
          <Route exact path='/' element={<Home />}/> {/*Creating a Home page and routing it to Home javascript app*/}
          <Route exact path='/aboutus' element={<AboutUs />}/> {/*Creating a About Us page and routing it to About javascript app*/}
          <Route exact path='/brands' element={<Brands />}/> {/*Creating a Brands page and routing it to Brands javascript app*/}
          <Route exact path='/ingredients' element={<Ingredients />}/>{/*Creating a Ingredients page and routing it to Ingredients javascript app */}
          <Route exact path='/sustainability' element={<Sustainability />}/>{/*Creating a Sustainability page and routing it to Sustainability javascript app */}
          <Route exact path='/innovation' element={<Innovation />}/>{/*Creating a Innovation page and routing it to Innovation javascript app */}
          <Route exact path='/newsroom' element={<Newsroom />}/>{/*Creating a Newsroom page and routing it to Newsroom javascript app */}
          <Route exact path='*' element={<Home />}/>
        </Routes>
    </div>
  );
}

export default App;


// Bonus questions:
// 1. Hershey doesn't have a AI and DS role
// 2. Making More Moments of Goodness for more than 125 years we’ve made moments of goodness for people around the world with our iconic, beloved brands.
// 3. Requirements are Manufacturing, Sales, Supply Chain, Marketing, Reasearch.
// 4. Company will have a steady growth since the demnd for fine quality chocolates never ends.
// 5. No AI cant disrupt this sector since it cant replicate the taste sense of humans.
// 6. They can utilize AI & DS, to check their marketing ad try to improve their sales.
// 7. No, I am not interested in making a career.





