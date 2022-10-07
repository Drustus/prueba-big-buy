type useModalProps = (onSave: () => void) => useModalResultProps;

type useModalResultProps = {
  openModal: () => void;
  closeModal: () => void;
  withModal: withModalProps;
};

type withModalProps = (Body: React.ReactNode, title: string) => React.ReactNode;
