import { useEffect } from "react";
import { DrawerAndLayout } from "../../../components/DrawerAndLayout";

const Thumbnails = () => {
	useEffect(() => {
		document.title = `Embed Thumbnails | Near`;
	});

	return (
		<>
			<DrawerAndLayout pageTitle={"Embed Thumbnails"} locationBreadcrumbs={["Settings", "Embed", "Thumbnails"]}>
				Page
			</DrawerAndLayout>
		</>
	);
};

export { Thumbnails };
