import { Route, Routes } from "react-router-dom";
import { Home, Leaderboards, Help, AdminLogin, PageNotFound } from "../pages";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        {/* Main (for General Public) */}
        <Route path="/" element={<Home />} />
        <Route path="/leaderboards" element={<Leaderboards />} />
        <Route path="/help" element={<Help />} />
        <Route path="/admin/login" element={<AdminLogin />} />

        {/* Errors */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export { AllRoutes };
