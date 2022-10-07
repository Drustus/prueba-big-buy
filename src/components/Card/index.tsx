import BCard from "react-bootstrap/Card";
import "./styles.scss";
import Title from "./Title";
import Props from "./types";

const Card = ({ children }: Props) => {
  return (
    <div className="card default-card">
      <BCard.Body>{children}</BCard.Body>
    </div>
  );
};

export default Card;
Card.Title = Title;
