import Table from "components/Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import { useContext, useState } from "react";
import { FilterContext } from "contexts/filter/FilterContext";
import useColumnFilter from "hooks/columnFilter/useColumnFilter";
import DateFilterForm from "./DateFilterForm";
import "./styles.scss";

const Header = () => {
  const [showFilter, setShowFilter] = useState<boolean>(false);
  const { dateEnd, dateIni } = useContext(FilterContext);
  const columns = useColumnFilter();

  const closeFilter = () => {
    setShowFilter(false);
  };

  const PopoverFilter = (
    <Popover>
      <Popover.Header as="h3">Filtrar por fecha</Popover.Header>
      <Popover.Body>
        <DateFilterForm closeFilter={closeFilter} />
      </Popover.Body>
    </Popover>
  );
  return (
    <thead>
      <tr className="table__header">
        {columns.showId && <Table.Header>Nº Movimiento</Table.Header>}
        {columns.showDate && (
          <Table.Header>
            <div className="header-icons">
              <div>Fecha</div>
              <OverlayTrigger
                show={showFilter}
                trigger="click"
                placement="right"
                overlay={PopoverFilter}
              >
                <FontAwesomeIcon
                  className={`header-icon ${
                    dateIni || dateEnd ? "icon-selected" : ""
                  }`}
                  icon={faFilter}
                  onClick={() => setShowFilter(current => !current)}
                />
              </OverlayTrigger>
            </div>
          </Table.Header>
        )}
        {columns.showConcept && <Table.Header>Concepto</Table.Header>}
        {columns.showAmount && <Table.Header>Importe</Table.Header>}
        {columns.showLastBalance && <Table.Header>Saldo anterior</Table.Header>}
        {columns.showNextBalance && (
          <Table.Header>Saldo posterior</Table.Header>
        )}
      </tr>
    </thead>
  );
};

export default Header;
