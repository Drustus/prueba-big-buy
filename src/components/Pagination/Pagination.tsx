import { useContext } from "react";
import BPagination from "react-bootstrap/Pagination";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import "./styles.scss";
import Props, { OnSelectedPageProps, OnSelectedTakeProps } from "./types";
import { PaginationContext } from "contexts/pagination/PaginationContext";

const Pagination = ({ total }: Props) => {
  const { currentPage, setCurrentPage, setSkip, setTake, skip, take } =
    useContext(PaginationContext);

  const totalPages = Math.ceil(total / take);
  const initialPage = skip ? skip + 1 : 1;
  let pagesToShow = 5;

  if (initialPage + 4 < totalPages) {
    pagesToShow = initialPage + 4;
  } else {
    pagesToShow = totalPages;
  }

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

  const onSelectedPage: OnSelectedPageProps = page => {
    setCurrentPage(page);
  };

  const onSelectedFirst = () => {
    setSkip(0);
    setCurrentPage(1);
  };

  const onSelectedLast = () => {
    setCurrentPage(totalPages);
    if (totalPages - take > 0) {
      setSkip(totalPages - take);
    }
  };

  const onSkipForward = () => {
    setSkip(currentSkip => currentSkip + 5);
  };

  const onSkipBackward = () => {
    setSkip(currentSkip => currentSkip - 5);
  };

  const onSelectedTake: OnSelectedTakeProps = take => {
    setTake(take);
    setCurrentPage(1);
    setSkip(0);
  };

  const onPrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage => currentPage - 1);

      if (currentPage - 1 < initialPage) {
        setSkip(currentSkip => currentSkip - 5);
      }
    }
  };

  const onNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage => currentPage + 1);

      if (currentPage + 1 === initialPage + pagesToShow) {
        setSkip(currentSkip => currentSkip + 5);
      }
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
          {pagesToShow < totalPages && (
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
        <div className="pagination-message">{`Mostrando filas ${
          (currentPage - 1) * take + 1
        } a ${Math.min(
          (currentPage - 1) * take + take,
          total
        )} de ${total}`}</div>
      </div>
    </div>
  );
};

export default Pagination;
