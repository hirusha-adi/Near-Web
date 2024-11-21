import { Route, Routes } from "react-router-dom";
import {
  Home,
  Leaderboards,
  Help,
  AdminLogin,
  AdminHome,
  PageNotFound,
} from "../pages";
import { isUserLoggedIn } from "../lib/backend";
import { Navigate } from "react-router-dom";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        {/* Main (for General Public) */}
        <Route path="/" element={<Home />} />
        <Route path="/leaderboards" element={<Leaderboards />} />
        <Route path="/help" element={<Help />} />

        {/* Admin Pages */}
        <Route path="/admin" element={<Navigate to="/admin/login" />} />
        <Route
          path="/admin/login"
          element={
            isUserLoggedIn ? <Navigate to="/admin/home" /> : <AdminLogin />
          }
        />
        <Route
          path="/admin/home"
          element={isUserLoggedIn ? <AdminHome /> : <Navigate to="/404" />}
        />

        {/* Errors */}
        <Route path="*" element={<Navigate to="/404" />} />
        <Route path="/404" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export { AllRoutes };
