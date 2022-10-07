import { useState } from "react";
import BPagination from "react-bootstrap/Pagination";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import "./styles.scss";

const Pagination = ({ total }: { total: number }) => {
  const [currentPosition, setCurrentPosition] = useState<number>(1);
  const [take, setTake] = useState<number>(5);

  return (
    <div className="paginator-container">
      <div>
        <BPagination>
          <BPagination.First />
          <BPagination.Prev />
          <BPagination.Item>{1}</BPagination.Item>
          <BPagination.Item>{2}</BPagination.Item>
          <BPagination.Item>{3}</BPagination.Item>
          <BPagination.Item active>{4}</BPagination.Item>
          <BPagination.Item>{5}</BPagination.Item>
          <BPagination.Next />
          <BPagination.Last />
        </BPagination>
      </div>
      <div>
        <DropdownButton title={take} variant="secondary">
          <Dropdown.Item onClick={v => setTake(5)}>5</Dropdown.Item>
          <Dropdown.Item onClick={v => setTake(10)}>10</Dropdown.Item>
          <Dropdown.Item onClick={v => setTake(20)}>20</Dropdown.Item>
        </DropdownButton>
      </div>
    </div>
  );
};

export default Pagination;
