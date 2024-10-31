interface Props {
  currentPage: number;
  totalPages: number;
  onPrevious: () => void;
  onNext: () => void;
}

const Pagination = ({ currentPage, totalPages, onPrevious, onNext }: Props) => {
  return (
    <div className="flex justify-center items-center mx-4 my-4">
      <button
        onClick={onPrevious}
        disabled={currentPage === 1}
        className={`px-4 py-2 mx-2 text-white bg-blue-600 rounded ${
          currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        Previous Page
      </button>
      <p>
        Page {currentPage} of {totalPages}
      </p>
      <button
        onClick={onNext}
        disabled={currentPage === totalPages}
        className={`px-4 py-2 mx-2 text-white bg-blue-600 rounded ${
          currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        Next Page
      </button>
    </div>
  );
};

export default Pagination;
