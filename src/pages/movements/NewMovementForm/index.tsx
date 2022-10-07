import { useState } from "react";
import Form from "react-bootstrap/Form";

const NewMovementForm = ({ onSubmit }) => {
  const [value, setValue] = useState("");

  const onChange: (event: any) => void = event => {
    setValue(event.target.value);
  };

  const onSubmitHandler = () => {};

  return (
    <>
      <Form onSubmit={onSubmitHandler}>
        <Form.Group className="mb-3" controlId="quantity">
          <Form.Label>Cantidad</Form.Label>
          <Form.Control type="text" onChange={onChange} value={value} />
        </Form.Group>
      </Form>
    </>
  );
};

export default NewMovementForm;
