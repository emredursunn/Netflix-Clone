import { Route, Routes } from "react-router-dom";
import { Footer } from "./components/footer/Footer";
import StarterPage from "./pages/StarterPage";
import Login from "./pages/auth/Login";
import HomePage from "./pages/HomePage";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<StarterPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
      <ToastContainer />
      <Footer />
    </div>
  );
}

export default App;
