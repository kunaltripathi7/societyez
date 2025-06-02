import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";

const AppLayout = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main className="container mx-auto py-4 px-4">
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;