type useModalProps = (title: string, onSave: () => void) => useModalResultProps;

type useModalResultProps = {
  openModal: () => void;
  closeModal: () => void;
  withModal: withModalProps;
};

type withModalProps = (Body: React.ReactNode) => React.ReactNode;
