import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTableColumns } from "@fortawesome/free-solid-svg-icons";
import "./styles.scss";
import { useContext } from "react";
import { FilterContext } from "contexts/filter/FilterContext";

const Searcher = () => {
  const { onFilterText, textFilter } = useContext(FilterContext);
  return (
    <div className="searcher">
      <Form onSubmit={e => e.preventDefault()}>
        <Form.Group controlId="filter">
          <Form.Control
            type="text"
            placeholder="Search..."
            onChange={e => onFilterText(e.target.value)}
            value={textFilter}
          />
        </Form.Group>
      </Form>
      <Button className="columnas-button" variant="secondary">
        <FontAwesomeIcon icon={faTableColumns} /> Columnas
      </Button>
    </div>
  );
};

export default Searcher;
