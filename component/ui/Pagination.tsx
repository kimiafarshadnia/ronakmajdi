import { PaginationProps } from "@/types/generalTypes";

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  siblingCount = 1,
  className = "",
}) => {
  if (totalPages <= 1) return null;

  const createPageArray = () => {
    const pages: (number | string)[] = [];

    const startPage = Math.max(2, currentPage - siblingCount);
    const endPage = Math.min(totalPages - 1, currentPage + siblingCount);

    pages.push(1);

    if (startPage > 2) {
      pages.push("...");
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    if (endPage < totalPages - 1) {
      pages.push("...");
    }

    if (totalPages > 1) {
      pages.push(totalPages);
    }

    return pages;
  };

  const pages = createPageArray();

  return (
    <div className={`flex flex-row-reverse items-center gap-2 ${className}`}>
      <button
        className="cursor-pointer px-3 py-1 border hover:bg-[#E5E1DA] hover:text-black disabled:opacity-50"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        قبلی
      </button>

      {pages.map((page, idx) =>
        typeof page === "number" ? (
          <button
            key={idx}
            className={`cursor-pointer px-3 py-1 border hover:bg-[#E5E1DA] hover:text-black ${
              page === currentPage ? "bg-[#E5E1DA] text-black" : ""
            }`}
            onClick={() => onPageChange(page)}
          >
            {page}
          </button>
        ) : (
          <span key={idx} className="px-2 py-1">
            {page}
          </span>
        )
      )}

      <button
        className="cursor-pointer px-3 py-1 border hover:bg-[#E5E1DA] hover:text-black disabled:opacity-50"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        بعدی
      </button>
    </div>
  );
};
