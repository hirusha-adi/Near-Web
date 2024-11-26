import { useEffect } from "react";
import { DrawerAndLayout } from "../../components/DrawerAndLayout";

const Lavalink = () => {
	useEffect(() => {
		document.title = `Lavalink Logs | Near`;
	});

	return (
		<>
			<DrawerAndLayout pageTitle={"Lavalink Logs"} locationBreadcrumbs={["Settings", "Logs", "Lavalink"]}>
				Page
			</DrawerAndLayout>
		</>
	);
};

export { Lavalink };
