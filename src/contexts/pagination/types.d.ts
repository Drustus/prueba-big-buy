export type PaginationContextProps = {
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  take: number;
  setTake: React.Dispatch<React.SetStateAction<number>>;
  skip: number;
  setSkip: React.Dispatch<React.SetStateAction<number>>;
};

export type Props = {
  children: React.ReactNode;
};
