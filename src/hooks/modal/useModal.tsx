import React, { useState } from "react";
import Modal from "components/Modal";

const useModal: useModalProps = (title, onSave) => {
  const [show, setShow] = useState<boolean>();

  const openModal = () => {
    setShow(true);
  };

  const closeModal = () => {
    setShow(false);
  };

  const withModal: (Body: React.ReactNode) => React.ReactNode = Body => {
    return (
      <Modal show={show} onClose={closeModal} onSave={onSave} title={title}>
        {Body}
      </Modal>
    );
  };

  return { openModal, closeModal, withModal };
};

export default useModal;
