import { WalletContext } from "contexts/WalletContext";
import { forwardRef, useContext, useImperativeHandle, useState } from "react";
import Form from "react-bootstrap/Form";
import numberWithPoint from "utils/numberWithPoint";
import Props from "./types";

const NewMovementForm = forwardRef<{ submit: () => void }, Props>(
  (props, ref) => {
    useImperativeHandle(ref, () => ({
      submit: onSubmitHandler
    }));

    const { type, onSubmit } = props;
    const { balance } = useContext(WalletContext);
    const [value, setValue] = useState<string>("");
    const [error, setError] = useState<string | null>();

    const onChange: (event: any) => void = event => {
      setValue(event.target.value);
    };

    const onSubmitHandler: (event?: any) => void = event => {
      event?.preventDefault();
      const number = value.replaceAll(".", "").replace(",", ".");
      const quantity = Number.parseFloat(number);

      if (Number.isNaN(quantity)) {
        setError("Formato incorrecto");
      } else {
        if (quantity <= 0) {
          setError("La cantidad debe ser mayor a 0");
          return;
        } else if (type === 1 && balance - quantity < 0) {
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

    return (
      <>
        <Form onSubmit={onSubmitHandler}>
          <Form.Group className="mb-3" controlId="quantity">
            <Form.Label>Cantidad</Form.Label>
            <Form.Control
              type="text"
              onChange={onChange}
              value={value}
              isInvalid={!!error}
            />
            <Form.Control.Feedback type="invalid">
              {error}
            </Form.Control.Feedback>
          </Form.Group>
        </Form>
      </>
    );
  }
);

export default NewMovementForm;
