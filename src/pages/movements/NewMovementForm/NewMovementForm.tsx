import { WalletContext } from "contexts/wallet/WalletContext";
import { forwardRef, useContext, useImperativeHandle, useState } from "react";
import Form from "react-bootstrap/Form";
import numberWithPoint from "utils/numberWithPoint";
import Props, { OnChangeType, OnSubmitHandlerType } from "./types";
import "./styles.scss";

const PREFIX = "En tu cuenta quedarán:";

const NewMovementForm = forwardRef<{ submit: () => void }, Props>(
  (props, ref) => {
    useImperativeHandle(ref, () => ({
      submit: onSubmitHandler
    }));

    const { type, onSubmit } = props;
    const { balance } = useContext(WalletContext);
    const [value, setValue] = useState<string>("");
    const [error, setError] = useState<string | null>();

    const number = value.replaceAll(".", "").replace(",", ".");
    const isNaN = !/^\d+([,.]\d{1,2})?$/im.test(number);
    const quantity = Number.parseFloat(number);
    const isLowerThanZero = quantity <= 0;
    const totalBalanceLowerThanZero = type === 1 && balance - quantity < 0;

    const onChange: OnChangeType = event => {
      setValue(event.target.value);
    };

    const onSubmitHandler: OnSubmitHandlerType = event => {
      event?.preventDefault();

      if (isNaN) {
        setError("Formato incorrecto");
      } else {
        if (isLowerThanZero) {
          setError("La cantidad debe ser mayor a 0");
        } else if (totalBalanceLowerThanZero) {
          setError(
            `No dispones de tanto dinero. Máximo a extraer: ${numberWithPoint(
              balance
            )} €`
          );
        } else {
          setError(null);
          onSubmit(quantity);
        }
      }
    };

    const getResultAfterOperation = () => {
      if (isNaN || isLowerThanZero || totalBalanceLowerThanZero) {
        return null;
      } else if (type === 0) {
        return (
          <div className="result-message">
            {`${PREFIX}: ${numberWithPoint(balance + quantity)} €`}
          </div>
        );
      } else {
        return (
          <div className="result-message">
            {`${PREFIX} ${numberWithPoint(balance - quantity)} €`}
          </div>
        );
      }
    };

    return (
      <Form onSubmit={onSubmitHandler}>
        <Form.Group className="mb-3" controlId="quantity">
          <Form.Label>Cantidad</Form.Label>
          <Form.Control
            type="text"
            onChange={onChange}
            onFocus={() => setError(null)}
            value={value}
            isInvalid={!!error}
            placeholder={
              type === 1 ? `Hasta ${numberWithPoint(balance)} €` : undefined
            }
          />
          <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
          {getResultAfterOperation()}
        </Form.Group>
      </Form>
    );
  }
);

export default NewMovementForm;
