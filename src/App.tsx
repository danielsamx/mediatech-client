import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./modules/auth/pages/SignUp";
import Planner from "./modules/planner/pages/Planner";
import SignIn from "./modules/auth/pages/SignIn";
import Case from "./modules/cases/pages/Case";
import AppLayout from "./share/AppLayout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/registrar" element={<SignUp />} />

        <Route element={<AppLayout />}>
          <Route path="/turnos" element={<Planner />} />
          <Route path="/casos" element={<Case />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
