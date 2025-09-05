import { Navigate, Route, Routes } from "react-router";
import "./App.css";
import DashboardLayout from "./layouts/DashboardLayout";
import AuthLayout from "./layouts/AuthLayout";
import { AuthenticationRoutes } from "./routes/authentication/AuthenticationRoutes";
import Home from "./pages/subadmin/app/Home";
import { AppRoutes } from "./routes/app/AppRoutes";
import { AppContext } from "./context/AppContext";
import { useContext } from "react";

function App() {
  const { token, role } = useContext(AppContext);
  return (
    <Routes>
      <Route path="/" element={<Navigate to={"/auth/login"} />} />

      <Route path="app" element={<DashboardLayout />}>
        <Route index element={<div className="text-7xl">Page Not Found</div>} />
        {AppRoutes?.map((Link, i) => {
          if (role === "sub-admin" && Link.url === "sub-admin") {
            return (
              <Route
                key={i}
                path={Link.url}
                element={<div className="text-7xl">Page Not Found</div>}
              />
            );
          }

          return (
            <Route
              key={i}
              path={Link.url}
              element={token ? Link.page : <Navigate to="/auth/login" />}
            />
          );
        })}
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
