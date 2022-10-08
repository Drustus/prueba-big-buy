import Button from "components/Button";
import Card from "components/Card";
import MovementsList from "./List";
import Quantity from "./Quantity";
import Title from "./Title";
import useModal from "hooks/modal/useModal";
import NewMovementForm from "./NewMovementForm";
import { useContext, useRef, useState } from "react";
import "./styles.scss";
import { WalletContext } from "contexts/wallet/WalletContext";
import PaginationProvider from "contexts/pagination/PaginationContext";
import Searcher from "./Searcher";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { OnSubmitHanlderProps } from "./types";

const Movements = () => {
  const { onAddMovement, balance } = useContext(WalletContext);
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

  const onSubmitHanlder: OnSubmitHanlderProps = value => {
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
            <div className="right-buttons">
              <OverlayTrigger
                show={balance !== 0 ? false : undefined}
                overlay={<Tooltip>¡No queda dinero en el monedero!</Tooltip>}
              >
                <span className="d-inline-block">
                  <Button onClick={onExtract} disabled={balance === 0}>
                    Retirar fondos
                  </Button>
                </span>
              </OverlayTrigger>
              <Button secondary onClick={onAdd}>
                Ingresar fondos
              </Button>
            </div>
          </div>
        </Card.Title>
        <Searcher />
        <PaginationProvider>
          <MovementsList />
        </PaginationProvider>
      </Card>
      {withModal(
        <NewMovementForm
          onSubmit={onSubmitHanlder}
          type={operation}
          ref={formRef}
        />,
        operation === 0 ? "Ingresar fondos" : "Retirar fondos"
      )}
    </>
  );
};

export default Movements;
