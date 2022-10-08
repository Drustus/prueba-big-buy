import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightArrowLeft } from "@fortawesome/free-solid-svg-icons";
import "./styles.scss";

const Title = () => {
  return (
    <div className="title">
      <FontAwesomeIcon className="title-icon" icon={faArrowRightArrowLeft} />
      Movimientos
    </div>
  );
};

export default Title;
