import Form from "react-bootstrap/Form";
import BButton from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTableColumns } from "@fortawesome/free-solid-svg-icons";
import "./styles.scss";
import { useContext, useEffect, useState } from "react";
import { FilterContext } from "contexts/filter/FilterContext";
import { OverlayTrigger, Popover } from "react-bootstrap";
import Button from "components/Button";
import { OnSelectedColumnProps } from "./types";

const COLUMNS = [
  { id: "id", label: "Nº Movimiento" },
  { id: "date", label: "Fecha" },
  { id: "concept", label: "Concepto" },
  { id: "amount", label: "Importe" },
  { id: "lastBalance", label: "Saldo anterior" },
  { id: "nextBalance", label: "Saldo posterior" }
];

const Searcher = () => {
  const {
    onFilterText,
    textFilter,
    onColumnFilter,
    filterColumns,
    clearColumnFilter
  } = useContext(FilterContext);
  const [showFilter, setShowFilter] = useState(false);
  const [selectedColumns, setSelectedColumns] = useState<Array<string>>([]);

  const onSelectedColumn: OnSelectedColumnProps = id => {
    const index = selectedColumns.indexOf(id);
    if (index >= 0) {
      setSelectedColumns(current => {
        const copy = [...current];
        copy.splice(index, 1);
        return copy;
      });
    } else {
      setSelectedColumns(current => [...current, id]);
    }
  };

  const onSubmit = () => {
    onColumnFilter(selectedColumns);
    setShowFilter(false);
  };

  const onClear = () => {
    clearColumnFilter();
    setShowFilter(false);
  };

  useEffect(() => {
    setSelectedColumns(filterColumns);
  }, [filterColumns]);

  const PopoverFilter = (
    <Popover>
      <Popover.Header as="h3">Filtrar columnas</Popover.Header>
      <Popover.Body>
        <Form onSubmit={e => e.preventDefault()}>
          <Form.Group controlId="id">
            {COLUMNS.map(col => (
              <Form.Check
                key={col.id}
                id={col.id}
                type="checkbox"
                label={col.label}
                disabled={
                  selectedColumns.length === COLUMNS.length - 1 &&
                  selectedColumns.indexOf(col.id) === -1
                }
                onChange={() => onSelectedColumn(col.id)}
                checked={selectedColumns.indexOf(col.id) === -1}
              />
            ))}
          </Form.Group>
        </Form>
        <div className="popover-footer">
          <Button onClick={onSubmit}>Guardar</Button>
          <BButton variant="secondary" onClick={() => setShowFilter(false)}>
            Cerrar
          </BButton>
          <BButton
            variant="warning"
            onClick={onClear}
            disabled={filterColumns.length === 0}
          >
            Limpiar
          </BButton>
        </div>
      </Popover.Body>
    </Popover>
  );

  return (
    <div className="searcher">
      <Form className="searcher-form" onSubmit={e => e.preventDefault()}>
        <Form.Group className="searcher-form__input-container">
          <Form.Control
            type="text"
            placeholder="Buscar..."
            onChange={e => onFilterText(e.target.value)}
            value={textFilter}
          />
        </Form.Group>
      </Form>
      <OverlayTrigger
        show={showFilter}
        trigger="click"
        placement="bottom"
        overlay={PopoverFilter}
      >
        <BButton
          className="columnas-button"
          variant="secondary"
          onClick={() => setShowFilter(current => !current)}
        >
          <FontAwesomeIcon icon={faTableColumns} /> Columnas
        </BButton>
      </OverlayTrigger>
    </div>
  );
};

export default Searcher;
