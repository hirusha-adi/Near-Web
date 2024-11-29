import { useEffect } from "react";
import { DrawerAndLayout } from "../../components/DrawerAndLayout";
import { getCommandsHistory } from "../../../../lib/backend";
import { useFetchPocketbase, usePagination } from "../../../../hooks";

const Commands = () => {
	useEffect(() => {
		document.title = `Commands History | Near`;
	});

	const { currentPage, nextPage, previousPage, resetPage, setPage, maxPage, setMaxPage } = usePagination(1);
	const { data: commands, loading, error } = useFetchPocketbase(getCommandsHistory, currentPage);

	useEffect(() => {
    if (commands?.totalPages) {
      setMaxPage(commands.totalPages);
    }
  }, [commands, setMaxPage]);

	console.log(commands?.items)

	return (
		<>
			<DrawerAndLayout pageTitle={"Command Logs (History)"} locationBreadcrumbs={["Settings", "Logs", "Commands"]}>
				<div onClick={() => nextPage()}>
					Click here
				</div>
			</DrawerAndLayout>
		</>
	);
};

export { Commands };
