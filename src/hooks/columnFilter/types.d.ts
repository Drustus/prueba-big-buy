type useColumnFilterProps = () => useColumnFilterResultProps;

type useColumnFilterResultProps = {
  showId: boolean;
  showDate: boolean;
  showConcept: boolean;
  showAmount: boolean;
  showLastBalance: boolean;
  showNextBalance: boolean;
};

export default useColumnFilterProps;
