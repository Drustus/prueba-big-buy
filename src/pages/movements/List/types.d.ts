type Props = {
  children: React.ReactNode;
};

export type DateFilterFormProps = {
  closeFilter: () => void;
};

export type WithHighlightProps = (
  text: string,
  filter: string | undefined
) => React.ReactNode;

export type GetCellContentProps = (text: string) => React.ReactNode;

export default Props;
