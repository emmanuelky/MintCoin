import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CryptoDetailPage from "./components/CryptoDetailPage";
import CryptoMarket from "./components/CryptoMarket";
import CryptoNavBar from "./components/CryptoNavBar";

function App() {
  return (
    <div className="bg-blue-100">
      <CryptoNavBar />
      <Router>
        <Routes>
          <Route path="/" element={<CryptoMarket />} />
          <Route path="/crypto/:id" element={<CryptoDetailPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
