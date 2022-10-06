import BCard from "react-bootstrap/Card";
import "./styles.scss";
import Title from "./Title";
import Props from "./types";

const Card = ({ children }: Props) => {
  return (
    <BCard className="card">
      <BCard.Body>{children}</BCard.Body>
    </BCard>
  );
};

export default Card;
Card.Title = Title;
