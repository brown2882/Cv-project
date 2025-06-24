import logo from './logo.svg';
import './style/login.scss';
import { Header } from './component/header';
import { Login } from './component/login';
import { Route, Routes } from 'react-router-dom';
import {Resume} from './component/resume'
import { Contact } from './component/contact';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/header" element={<Header />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;


