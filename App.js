import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Footer, Header } from './components';
import { ForgotPassword, Home, Login, Sign } from './pages';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Sign />} />
          <Route path='/forgotpass' element={<ForgotPassword />} />
          {/* <Route path='/:id' element /> */}
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;