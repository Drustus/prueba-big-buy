import BCard from "react-bootstrap/Card";

import Props from "./types";

const Card = ({ children }: Props) => {
  return (
    <BCard>
      <BCard.Body>{children}</BCard.Body>
    </BCard>
  );
};

export default Card;
Card.Title = BCard.Title;
