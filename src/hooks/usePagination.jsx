import { useState } from "react";

export function usePagination(initialPage = 1, minPage = 1) {
  const [currentPage, setCurrentPage] = useState(initialPage);

  const nextPage = () => setCurrentPage((prev) => prev + 1);

  const previousPage = () =>
    setCurrentPage((prev) => Math.max(prev - 1, minPage));

  const resetPage = () => setCurrentPage(initialPage);

  return { currentPage, nextPage, previousPage, resetPage, setPage: setCurrentPage };
}
