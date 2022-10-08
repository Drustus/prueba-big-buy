import { useState } from "react";
import BPagination from "react-bootstrap/Pagination";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import "./styles.scss";
import Props from "./types";

const Pagination = ({ total, onPageChange }: Props) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [take, setTake] = useState<number>(5);
  const [skip, setSkip] = useState<number>(0);

  const totalPages = Math.ceil(total / take);
  const initialPage = skip ? skip + 1 : 1;
  const offset = skip + take;
  const containsMorePages = offset < totalPages;
  const pagesToShow =
    containsMorePages || totalPages - offset > 5 ? 5 : totalPages;

  const getPages = () => {
    const Pages = [];

    for (let page = initialPage; page <= pagesToShow; page++) {
      Pages.push(
        <BPagination.Item
          key={page}
          active={currentPage === page}
          onClick={() => onSelectedPage(page)}
        >
          {page}
        </BPagination.Item>
      );
    }

    return Pages;
  };

  const onSelectedPage: (page: number) => void = page => {
    onPageChange(page);
    setCurrentPage(page);
  };

  const onSelectedFirst = () => {
    setSkip(0);
    setCurrentPage(1);
  };

  const onSelectedLast = () => {
    setSkip(totalPages - take);
    setCurrentPage(totalPages);
  };

  const onSkipForward = () => {
    setSkip(currentSkip => currentSkip + 5);
  };

  const onSkipBackward = () => {
    setSkip(currentSkip => currentSkip - 5);
  };

  const onSelectedTake: (take: number) => void = take => {
    setTake(take);
    setCurrentPage(1);
    setSkip(0);
  };

  const onPrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage => currentPage - 1);
    }
    if (currentPage - 1 < initialPage) {
      setSkip(currentSkip => currentSkip - 5);
    }
  };

  const onNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage => currentPage + 1);
    }
    if (currentPage + 1 === initialPage + pagesToShow) {
      setSkip(currentSkip => currentSkip + 5);
    }
  };

  return (
    <div className="paginator-container">
      <div>
        <BPagination>
          <BPagination.First onClick={onSelectedFirst} />
          <BPagination.Prev onClick={onPrev} />
          {pagesToShow > 5 && <BPagination.Ellipsis onClick={onSkipBackward} />}
          {getPages()}
          {containsMorePages && (
            <BPagination.Ellipsis onClick={onSkipForward} />
          )}
          <BPagination.Next onClick={onNext} />
          <BPagination.Last onClick={onSelectedLast} />
        </BPagination>
      </div>
      <div className="take">
        <DropdownButton title={take} variant="secondary">
          <Dropdown.Item onClick={() => onSelectedTake(5)}>5</Dropdown.Item>
          <Dropdown.Item onClick={() => onSelectedTake(10)}>10</Dropdown.Item>
          <Dropdown.Item onClick={() => onSelectedTake(20)}>20</Dropdown.Item>
        </DropdownButton>
        <div className="pagination-message">Mostrando filas 1 a 5 de 50</div>
      </div>
    </div>
  );
};

export default Pagination;
