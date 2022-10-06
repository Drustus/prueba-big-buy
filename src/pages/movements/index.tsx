import Button from "components/Button";
import Card from "components/Card";
import Table from "components/Table";
import Header from "./Header";
import MovementsList from "./MovementsList";
import Quantity from "./Quantity";

import "./styles.scss";
import Title from "./Title";

const Movements = () => {
  return (
    <Card>
      <Card.Title>
        <Title />
        <div className="right-button">
          <Quantity />
          <Button>Ingresar fondos</Button>
          <Button secondary>Retirar fondos</Button>
        </div>
      </Card.Title>
      <Table>
        <Header />
        <MovementsList />
      </Table>
    </Card>
  );
};

export default Movements;
