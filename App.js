import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Footer, Header } from './components';
import { ForgotPassword, Home, Login, Sign } from './pages';
import { ThemeProvider } from './provider/ThemeContext';

function App() {
  return (
    <ThemeProvider>
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
    </ThemeProvider>
  );
}

export default App;