import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Registration from './pages/Registration';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/registration' element={<Registration />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
