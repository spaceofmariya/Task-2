
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SideBar from './components/includes/SideBar/SideBar';
import MainSpace from './components/includes/MainSpace/MainSpace';
import RightBar from './components/includes/RightBar/RightBar';
import Menu from './components/screens/Menu'
import FoodSite from './components/screens/FoodSite'
import Favourites from './components/screens/Favourites'
import WhiteCard from './components/screens/WhiteCard'
import Cart from './components/screens/Cart'
import Settings from './components/screens/Settings'
import Profile from './components/screens/Profile'
import Support from './components/screens/Support'

function App() {
  return (
    
    <div className="App">
      <Router>
        <div className="AppGlass">
          <SideBar />
          <MainSpace/>
          <RightBar/>
        </div>
        <Routes>
          {/* <Route path="/" element={<Menu />} /> */}
          <Route path="/menu" element={<Menu />} />
          <Route path="/foodSite" element={<FoodSite />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/whiteCard" element={<WhiteCard />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/support" element={<Support />} />
        </Routes>
      </Router>
    </div>

  );
}

export default App;
