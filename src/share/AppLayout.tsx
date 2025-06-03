import SideMenu from "../modules/auth/pages/Aside";
import { Outlet } from "react-router-dom";

export default function AppLayout() {
  return (
    <div style={{ display: "flex" }}>
      <SideMenu />
      <main style={{ flexGrow: 1 }}>
        <Outlet />
      </main>
    </div>
  );
}
