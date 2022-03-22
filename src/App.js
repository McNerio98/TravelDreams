import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

import HomeComponent from './components/pages/HomeComponent';
import PackageComponent from './components/pages/PackageComponent';
import AboutComponent from './components/pages/AboutComponent';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomeComponent/>} />
          <Route path='/packages' element={<PackageComponent/>} />
          <Route path='/about' element={<AboutComponent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
