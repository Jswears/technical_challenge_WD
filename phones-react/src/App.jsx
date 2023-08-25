import { Routes, Route } from "react-router-dom";
import AllPhonesPage from "./pages/AllPhonesPage";
import PhonesDetailsPage from "./pages/PhonesDetailsPage";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<AllPhonesPage />} />
      <Route path="/phone-details/:id" element={<PhonesDetailsPage />} />
    </Routes>
  );
}

export default App;
