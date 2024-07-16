
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';

import HomePage from './pages/HomePage';
import BrowsePage from './pages/BrowsePage';

function App() {
  
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/browse' element={<BrowsePage />} />
      </Routes>
    </div>
  );
}

export default App;
