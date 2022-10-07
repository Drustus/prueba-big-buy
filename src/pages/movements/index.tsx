import Button from "components/Button";
import Card from "components/Card";
import Table from "components/Table";
import Header from "./List/Header";
import MovementsList from "./List";
import Quantity from "./Quantity";
import Title from "./Title";
import useModal from "hooks/modal/useModal";
import NewMovementForm from "./NewMovementForm";
import { useContext, useRef, useState } from "react";
import "./styles.scss";
import { WalletContext } from "contexts/WalletContext";

const Movements = () => {
  const { onAddMovement } = useContext(WalletContext);
  const formRef = useRef<{ submit: () => void }>(null);
  const [operation, setOperation] = useState<number>(-1);

  const onSave = () => {
    formRef.current?.submit();
  };

  const { withModal, openModal, closeModal } = useModal(onSave);

  const onAdd = () => {
    setOperation(0);
    openModal();
  };

  const onExtract = () => {
    setOperation(1);
    openModal();
  };

  const onSubmitTest: (value: any) => void = value => {
    onAddMovement({
      amount: value,
      concept: operation
    });
    closeModal();
  };

  return (
    <>
      <Card>
        <Card.Title>
          <Title />
          <div className="right-button">
            <Quantity />
            <Button onClick={onExtract}>Retirar fondos</Button>
            <Button secondary onClick={onAdd}>
              Ingresar fondos
            </Button>
          </div>
        </Card.Title>
        <Table>
          <Header />
          <MovementsList />
        </Table>
      </Card>
      {withModal(
        <NewMovementForm
          onSubmit={onSubmitTest}
          type={operation}
          ref={formRef}
        />,
        operation === 0 ? "Ingresar fondos" : "Retirar fondos"
      )}
    </>
  );
};

export default Movements;
