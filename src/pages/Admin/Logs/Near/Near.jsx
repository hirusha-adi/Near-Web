import { useEffect } from "react";
import { DrawerAndLayout } from "../../components/DrawerAndLayout";

const Near = () => {
	useEffect(() => {
		document.title = `Near Logs | Near`;
	});

	return (
		<>
			<DrawerAndLayout pageTitle={"Near Logs"} locationBreadcrumbs={["Settings", "Logs", "Near"]}>
				Page
			</DrawerAndLayout>
		</>
	);
};

export { Near };
