import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ShopPage from './pages/ShopPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ShopPage />} />
        {/* We'll add /product/:id route soon */}
      </Routes>
    </Router>
  );
}

export default App;

