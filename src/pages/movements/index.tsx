import Button from "components/Button";
import Card from "components/Card";
import Table from "components/Table";
import Header from "./List/Header";
import MovementsList from "./List";
import Quantity from "./Quantity";
import Title from "./Title";
import useModal from "hooks/modal/useModal";
import "./styles.scss";
import NewMovementForm from "./NewMovementForm";

const Movements = () => {
  const { withModal, openModal } = useModal("Test", () => {
    console.log("SAVE!");
  });

  return (
    <>
      <Card>
        <Card.Title>
          <Title />
          <div className="right-button">
            <Quantity />
            <Button onClick={() => {}}>Retirar fondos</Button>
            <Button secondary onClick={openModal}>
              Ingresar fondos
            </Button>
          </div>
        </Card.Title>
        <Table>
          <Header />
          <MovementsList />
        </Table>
      </Card>
      {withModal(<NewMovementForm />)}
    </>
  );
};

export default Movements;
