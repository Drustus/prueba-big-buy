import { createContext, useState } from "react";
import { PaginationContextProps, Props } from "./types";

const params: PaginationContextProps = {
  currentPage: 1,
  setCurrentPage: () => {},
  take: 5,
  setTake: () => {},
  skip: 0,
  setSkip: () => {}
};

export const PaginationContext = createContext(params);

const PaginationProvider = ({ children }: Props) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [take, setTake] = useState<number>(5);
  const [skip, setSkip] = useState<number>(0);

  return (
    <PaginationContext.Provider
      value={{ currentPage, setCurrentPage, take, setTake, skip, setSkip }}
    >
      {children}
    </PaginationContext.Provider>
  );
};

export default PaginationProvider;
