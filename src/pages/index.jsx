// main
export { Home } from "./Home/Home";
export { Leaderboards } from "./Leaderboards/Leaderboards";
export { Help } from "./Help/Help";
export { Legal } from "./Legal/Legal"

// admin
// ----------------------------------------------------
// (basic)
export { Login as AdminLogin } from "./Admin/Login";
export { Home as AdminHome } from "./Admin/Home/Home";
// (settings)
export { Bot as AdminSettingsBot } from "./Admin/Settings/Bot/Bot"
export { Lavalink as AdminSettingsLavalink } from "./Admin/Settings/Lavalink/Lavalink"
export { Configuration as AdminSettingsEmbedConfiguration } from "./Admin/Settings/Embed/Configuration/Configuration"
export { Thumbnails as AdminSettingsEmbedThumbnails } from "./Admin/Settings/Embed/Thumbnails/Thumbnails"
// (logs)
export { Commands as AdminLogsCommands } from "./Admin/Logs/Commands/Commands"
export { Near as AdminLogsNear } from "./Admin/Logs/Near/Near"
export { Lavalink as AdminLogsLavalink } from "./Admin/Logs/Lavalink/Lavalink"
// ----------------------------------------------------

// others
export { PageNotFound } from "./PageNotFound";
