import Table from "components/Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import {
  Form,
  OverlayTrigger,
  Popover,
  Button as BButton
} from "react-bootstrap";
import Button from "components/Button";
import "./styles.scss";

const popover = (
  <Popover>
    <Popover.Header as="h3">Filtrar por fecha</Popover.Header>
    <Popover.Body>
      <Form.Group className="mb-3" controlId="dateIni">
        <Form.Label>Fecha inicio</Form.Label>
        <Form.Control type="date" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="dateEnd">
        <Form.Label>Fecha fin</Form.Label>
        <Form.Control type="date" />
      </Form.Group>
      <div className="popover-footer">
        <Button onClick={() => {}}>Guardar</Button>
        <BButton variant="secondary" onClick={() => {}}>
          Cerrar
        </BButton>
      </div>
    </Popover.Body>
  </Popover>
);

const Header = () => {
  return (
    <thead>
      <tr className="table__header">
        <Table.Header>Nº Pedido</Table.Header>
        <Table.Header>
          <div className="header-icons">
            <div>Fecha</div>
            <OverlayTrigger trigger="click" placement="right" overlay={popover}>
              <FontAwesomeIcon
                icon={faFilter}
                onClick={() => console.log("TEST")}
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
