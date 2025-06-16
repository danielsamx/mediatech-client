import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./modules/auth/pages/SignUp";
import Planner from "./modules/planner/pages/Planner";
import SignIn from "./modules/auth/pages/SignIn";
import Case from "./modules/cases/pages/Case";
import AppLayout from "./share/AppLayout";
import { AuthProvider } from "./modules/auth/hooks/authContext";
import { RequireAuth } from "./modules/auth/hooks/RequireAuth";

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/registrar" element={<SignUp />} />

          {/* Rutas protegidas */}
          <Route element={<RequireAuth />}>
            <Route element={<AppLayout />}>
              <Route path="/turnos" element={<Planner />} />
              <Route path="/casos" element={<Case />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}
