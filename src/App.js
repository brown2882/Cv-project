import logo from './logo.svg';
import './style/login.scss';
import { Header } from './component/header';
import { Login } from './component/login';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/header" element={<Header />} />
        
      </Routes>
    </div>
  );
}

export default App;


