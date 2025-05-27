import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Case } from "./modules/cases/pages/Case";
import { SignIn } from "./pages/SignIn";
import { RegisterCase } from "./modules/cases/pages/RegisterCase";
import { Quote } from "./modules/quotes/pages/Quote";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/casos" element={<Case />} />
        <Route path="/registrar-caso" element={<RegisterCase />} />
        <Route path="/turnos" element={<Quote />} />
      </Routes>
    </Router>
  );
}

export default App;
