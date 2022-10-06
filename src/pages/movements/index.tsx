import Card from "components/Card";
import Table from "components/Table";
import Button from "react-bootstrap/Button";
import Header from "./Header";
import MovementsList from "./MovementsList";

const Movements = () => {
  return (
    <Card>
      <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
        <div>Movimientos</div>
        <div>Saldo actual</div>
        <Button variant="primary">Retirar fondos</Button>
        <Button variant="secondary">Ingresar fondos</Button>
      </div>
      <Table>
        <Header />
        <MovementsList />
      </Table>
    </Card>
  );
};

export default Movements;
