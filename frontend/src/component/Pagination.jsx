const Pagination = ({ page, setPage, total, limit }) => {
  const totalPages = Math.ceil(total / limit);

  return (
    <div className="   flex justify-center gap-4 items-center">
      {totalPages > 0 &&
        [...Array(totalPages)].map((val, index) => (
          <button
            className={`bg-green-500 rounded-full text-2xl p-2 ${
              page === index + 1 ? "text-white bg-orange-500" : ""
            }`}
            onClick={() => setPage(index + 1)}
          >
            {index + 1}
          </button>
        ))}
    </div>
  );
};

export default Pagination;
