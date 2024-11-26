import { useEffect } from "react";
import { DrawerAndLayout } from "../../components/DrawerAndLayout";

const Commands = () => {
	useEffect(() => {
		document.title = `Commands History | Near`;
	});

	return (
		<>
			<DrawerAndLayout pageTitle={"Command Logs (History)"} locationBreadcrumbs={["Settings", "Logs", "Commands"]}>
				Page
			</DrawerAndLayout>
		</>
	);
};

export { Commands };
