import { useEffect } from "react";
import { DrawerAndLayout } from "../../components/DrawerAndLayout";
import { getCommandsHistory } from "../../../../lib/backend";
import { useFetchPocketbase, usePagination } from "../../../../hooks";

const Commands = () => {
	useEffect(() => {
		document.title = `Commands History | Near`;
	});

	const { currentPage, nextPage, previousPage, resetPage, setPage } = usePagination(1);
	const { data: commands, loading, error } = useFetchPocketbase(getCommandsHistory, currentPage);

	
	console.log(commands?.items)

	return (
		<>
			<DrawerAndLayout pageTitle={"Command Logs (History)"} locationBreadcrumbs={["Settings", "Logs", "Commands"]}>
				<div onClick={() => nextPage(1)}>
					Click here
				</div>
			</DrawerAndLayout>
		</>
	);
};

export { Commands };
