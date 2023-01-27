import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Footer, Header } from './components';
import { Home } from './pages';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;