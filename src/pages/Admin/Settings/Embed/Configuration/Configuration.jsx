import { useEffect } from "react";
import { DrawerAndLayout } from "../../../components/DrawerAndLayout";

const Configuration = () => {
	useEffect(() => {
		document.title = `Embed Configuration | Near`;
	});

	return (
		<>
			<DrawerAndLayout pageTitle={"Embed Settings"} locationBreadcrumbs={["Settings", "Embed", "Configuration"]}>
				Page
			</DrawerAndLayout>
		</>
	);
};

export { Configuration };
