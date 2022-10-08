import Button from "components/Button";
import BButton from "react-bootstrap/Button";
import BModal from "react-bootstrap/Modal";
import Props from "./types";

const Modal = ({ title, children, onSave, onClose, show }: Props) => {
  return (
    <BModal show={show}>
      <BModal.Header>
        <BModal.Title>{title}</BModal.Title>
      </BModal.Header>

      <BModal.Body>{children}</BModal.Body>

      <BModal.Footer>
        <BButton variant="secondary" onClick={onClose}>
          Cerrar
        </BButton>
        <Button onClick={onSave}>Guardar</Button>
      </BModal.Footer>
    </BModal>
  );
};

export default Modal;
