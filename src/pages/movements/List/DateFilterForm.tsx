import { useContext, useState } from "react";
import Form from "react-bootstrap/Form";
import BButton from "react-bootstrap/Button";
import Button from "components/Button";
import { DateFilterFormProps } from "./types";
import { FilterContext } from "contexts/filter/FilterContext";

const DateFilterForm = ({ closeFilter }: DateFilterFormProps) => {
  const {
    onSelectedDateIni,
    dateEnd,
    dateIni,
    onSelectedDateEnd,
    rawIni,
    rawEnd,
    clearDateFilter
  } = useContext(FilterContext);
  const [error, showError] = useState<boolean>(false);

  const onSubmit = () => {
    if (!dateEnd || !dateIni) {
      closeFilter();
    } else if (dateEnd < dateIni) {
      showError(true);
    } else {
    }
  };

  const onClear = () => {
    clearDateFilter();
    closeFilter();
  };

  return (
    <>
      <Form onSubmit={onSubmit}>
        <Form.Group className="mb-3" controlId="dateIni">
          <Form.Label>Fecha inicio</Form.Label>
          <Form.Control
            type="date"
            defaultValue={rawIni}
            onChange={e => onSelectedDateIni(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="dateEnd">
          <Form.Label>Fecha fin</Form.Label>
          <Form.Control
            defaultValue={rawEnd}
            isInvalid={!!error}
            type="date"
            onChange={e => onSelectedDateEnd(e.target.value)}
          />
          <Form.Control.Feedback type="invalid">
            "La fecha de fin no puede ser anterior a la de inicio"
          </Form.Control.Feedback>
        </Form.Group>
      </Form>
      <div className="popover-footer">
        <Button onClick={onSubmit}>Guardar</Button>
        <BButton variant="secondary" onClick={closeFilter}>
          Cerrar
        </BButton>
        <BButton variant="light" onClick={onClear}>
          Limpiar
        </BButton>
      </div>
    </>
  );
};

export default DateFilterForm;
