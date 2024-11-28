import { Route, Routes, Navigate } from "react-router-dom";

import { isUserLoggedIn } from "../lib/backend";
import {
  // --------
  // Main
  // --------
  Home,
  Leaderboards,
  Help,
  Legal,

  // --------
  // Admin
  // --------
  // (basic)
  AdminLogin,
  AdminHome,
  // (settings)
  AdminSettingsBot,
  AdminSettingsLavalink,
  AdminSettingsEmbedConfiguration,
  AdminSettingsEmbedThumbnails,
  // (logs)
  AdminLogsCommands,
  AdminLogsNear,
  AdminLogsLavalink,

  // --------
  // Other
  // --------
  PageNotFound,
} from "../pages";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        {/* Main (for General Public) */}
        {/* ------------------------- */}
        {/* General */}
        <Route path="/" element={<Home />} />
        <Route path="/leaderboards" element={<Leaderboards />} />
        <Route path="/help" element={<Help />} />

        {/* Legal */}
        <Route path="/changelog" element={<Legal legalType="changelog" />} />
        <Route path="/license" element={<Legal legalType="license" />} />
        <Route path="/terms-of-service" element={<Legal legalType="terms-of-service" />} />
        <Route path="/privacy-policy" element={<Legal legalType="privacy-policy" />} />
        <Route path="/credits" element={<Legal legalType="credits" />} />
        <Route path="/open-source-licenses" element={<Legal legalType="open-source-licenses" />} />
        {/* ------------------------- */}


        {/* Admin Pages */}
        {/* ------------------------- */}
        {/* Admin Login Page */}
        <Route path="/admin" element={<Navigate to="/admin/login" />} />
        <Route path="/admin/login" element={isUserLoggedIn ? <Navigate to="/admin/statistics" /> : <AdminLogin />}
        />
        {/* Statistics (default page after login) */}
        <Route path="/admin/statistics" element={isUserLoggedIn ? <AdminHome /> : <Navigate to="/404" />} />
        {/*   Settings */}
        <Route path="/admin/settings/bot" element={isUserLoggedIn ? <AdminSettingsBot /> : <Navigate to="/404" />} />
        <Route path="/admin/settings/lavalink" element={isUserLoggedIn ? <AdminSettingsLavalink /> : <Navigate to="/404" />} />
        <Route path="/admin/settings/embed/configuration" element={isUserLoggedIn ? <AdminSettingsEmbedConfiguration /> : <Navigate to="/404" />} />
        <Route path="/admin/settings/embed/thumbnails" element={isUserLoggedIn ? <AdminSettingsEmbedThumbnails /> : <Navigate to="/404" />} />
        {/* Logs */}
        <Route path="/admin/logs/commands" element={isUserLoggedIn ? <AdminLogsCommands /> : <Navigate to="/404" />} />
        <Route path="/admin/logs/near" element={isUserLoggedIn ? <AdminLogsNear /> : <Navigate to="/404" />} />
        <Route path="/admin/logs/lavalink" element={isUserLoggedIn ? <AdminLogsLavalink /> : <Navigate to="/404" />} />
        {/* ------------------------- */}


        {/* Errors */}
        {/* ------------------------- */}
        <Route path="*" element={<Navigate to="/404" />} />
        <Route path="/404" element={<PageNotFound />} />
        {/* ------------------------- */}
      </Routes>
    </>
  );
};

export { AllRoutes };
