const Pagination = (props) => {
    const handlePagination = (current) => {
        props.pagination(current);
    };

    const generatePageNumbers = () => {
        const { total, current } = props;

        if (total <= 7) {
            return Array.from({ length: total }, (_, i) => i + 1);
        }

        const pages = [1];

        if (current > 4) {
            pages.push("...");
        }

        const start = Math.max(2, current - 2);
        const end = Math.min(total - 1, current + 2);



        for (let i = start; i <= end; i++) {
            pages.push(i);
        }

        if (current < total - 3) {
            pages.push("...");
        }

        pages.push(total);

        return pages;
    };

    const pageNumbers = generatePageNumbers();

    return (
        <div className="pagsi_box  my-2">
            <nav aria-label="Page navigation example">
                <ul className="pagsi_box">
                    {/* Previous Button */}
                    <li className="page-item">
                        <button
                            className="btn btn_outline"
                            disabled={props.current === 1}
                            onClick={() => handlePagination(props.current - 1)}
                        >
                            Prev
                        </button>
                    </li>

                    {/* Page Numbers */}
                    {pageNumbers.map((page, index) =>
                        page === "..." ? (
                            <li key={`ellipsis-${index}`} className="page-item">
                                <span className="dot_page">...</span>
                            </li>
                        ) : (
                            <li
                                key={`page-${page}`}
                                className={`page-item ${props.current === page ? "active_page" : "page_num"} px-3 py-1 rounded-md`}
                            >
                                <button
                                    className="page-link"
                                    onClick={() => handlePagination(page)}
                                >
                                    {page}
                                </button>
                            </li>
                        )
                    )}

                    {/* Next Button */}
                    <li className="page-item">
                        <button
                            className="btn btn_outline"
                            disabled={props.current === props.total}
                            onClick={() => handlePagination(props.current + 1)}
                        >
                            Next
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Pagination;
