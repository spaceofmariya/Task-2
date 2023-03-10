import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createContext, useState } from "react";
import { BreakFast } from './components/Data/Data';
import SideBar from './components/includes/SideBar';
import MainSpace from './components/includes/MainSpace';
import RightBar from './components/includes/RightBar';
import Menu from './components/screens/Menu';
import FoodSite from './components/screens/FoodSite';
import Favourites from './components/screens/Favourites';
import WhiteCard from './components/screens/WhiteCard';
import Cart from './components/screens/Cart';
import Settings from './components/screens/Settings';
import Profile from './components/screens/Profile';
import Support from './components/screens/Support';
import Recommended from './components/screens/inner-screens/Recommended';
import Breakfast from './components/screens/inner-screens/Breakfast';
import Lunch from './components/screens/inner-screens/Lunch';
import Dinner from './components/screens/inner-screens/Dinner';
import IceCream from './components/screens/inner-screens/IceCream';
import Coffee from './components/screens/inner-screens/Coffee';

export const DataContext = createContext();

function App() {

  const [loading, setLoading] = useState(true);

  return (
    
    <div className="App">
      <DataContext.Provider value={{BreakFast, loading, setLoading}}>
      <Router>
        <div className="AppGlass">
          <SideBar />
          <MainSpace/>
          <RightBar/>
        </div>
        <Routes>
          <Route path="/" element={<Recommended />} />
          <Route exact path="menu" element={<Menu/>}>
            <Route index element={<Recommended />} />
            <Route path="/menu/recommended" element={<Recommended />} /> 
            <Route path="/menu/breakfast" element={<Breakfast />} /> 
            <Route path="/menu/lunch" element={<Lunch />} /> 
            <Route path="/menu/dinner" element={<Dinner />} /> 
            <Route path="/menu/iceCream" element={<IceCream />} /> 
            <Route path="/menu/coffee" element={<Coffee />} />  
          </Route>
          <Route path="foodSite" element={<FoodSite />} />
          <Route path="favourites" element={<Favourites />} />
          <Route path="whiteCard" element={<WhiteCard />} />
          <Route path="cart" element={<Cart />} />
          <Route path="settings" element={<Settings />} />
          <Route path="profile" element={<Profile />} />
          <Route path="support" element={<Support />} />
        </Routes>
      </Router>
      </DataContext.Provider>
    </div>

  );
};

export default App;
