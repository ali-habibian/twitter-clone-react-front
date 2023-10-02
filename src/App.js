import './App.css';
import { Route, Routes } from 'react-router-dom';
import Authentication from './Components/Authentication/Authentication';
import HomePage from './Components/HomePage/HomePage';

function App() {
  return (
    <div className="">

      <Routes>
        <Route path="" element={true ? <HomePage /> : <Authentication />}></Route>
      </Routes>

    </div>
  );
}

export default App;
