import './App.css';
import { titleToPathname } from './Utils';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Portfolio from './Pages/Portfolio';
import Hobbies from './Pages/Hobbies';
import Navbar from './Components/Navbar';
import { hobbyData } from './Utils/Data';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {  
  const hobbyToRouteMap = (hobbyData) => (
      <Route 
          path={`${titleToPathname(hobbyData.title)}`} 
          element={<Hobbies hobbyData={hobbyData} />}
          key={hobbyData.title}
      />
  )

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/portfolio' element={<Portfolio/>}></Route>
          <Route path='/hobbies'>
            {hobbyData.map(hobbyToRouteMap)}
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
