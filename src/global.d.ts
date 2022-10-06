type Movement = {
  id: number;
  date: Date;
  concept: MovementType;
  amount: number;
};

enum MovementType {
  Add,
  Extract
}

export { Movement, MovementType };
