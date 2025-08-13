import { Navigate, Route, Routes } from "react-router";
import "./App.css";
import DashboardLayout from "./layouts/DashboardLayout";
import AuthLayout from "./layouts/AuthLayout";
import { AuthenticationRoutes } from "./routes/authentication/AuthenticationRoutes";
import Home from "./pages/subadmin/app/Home";
import { AppRoutes } from "./routes/app/AppRoutes";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={"/auth/login"} />} />

      <Route path="app" element={<DashboardLayout />}>
        <Route index element={<div className="text-7xl">Page Not Found</div>} />
        {AppRoutes?.map((Link, i) => (
          <Route path={Link.url} key={i} element={Link.page} />
        ))}
      </Route>

      <Route path="auth" element={<AuthLayout />}>
        <Route index element={<div className="text-7xl">Page Not Found</div>} />
        {AuthenticationRoutes?.map((Link, i) => (
          <Route path={Link.url} key={i} element={Link.page} />
        ))}
      </Route>

      <Route
        path="*"
        element={<div className="text-7xl">Page Not Found</div>}
      />
    </Routes>
  );
}

export default App;
