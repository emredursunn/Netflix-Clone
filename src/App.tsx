import { Route, Routes } from "react-router-dom";
import { Footer } from "./components/footer/Footer";
import StarterPage from "./pages/StarterPage";
// import Login from "./pages/auth/Login";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<StarterPage />} />
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/home" element={<HomePage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
