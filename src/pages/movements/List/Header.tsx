import Table from "components/Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { OverlayTrigger, Popover } from "react-bootstrap";
import "./styles.scss";
import DateFilterForm from "./DateFilterForm";
import { useContext, useState } from "react";
import { FilterContext } from "contexts/filter/FilterContext";

const Header = () => {
  const [showFilter, setShowFilter] = useState<boolean>(false);
  const { dateEnd, dateIni } = useContext(FilterContext);

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
        <Table.Header>Nº Pedido</Table.Header>
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
        <Table.Header>Concepto</Table.Header>
        <Table.Header>Importe</Table.Header>
        <Table.Header>Saldo anterior</Table.Header>
        <Table.Header>Saldo posterior</Table.Header>
      </tr>
    </thead>
  );
};

export default Header;
