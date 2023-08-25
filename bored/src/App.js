
import './App.css';

import { Route, Routes } from 'react-router-dom';
import NoScreen from './components/NoScreen'; 
import YesScreen from './components/YesScreen';
import Home from './components/Home';

function App() {
  return (

    <div className="App">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/no" element={<NoScreen />} />
      <Route path="/yes" element={<YesScreen />} />
    </Routes>  
    </div>
  );
}

export default App;
