import Table from "components/Table";

const Header = () => {
  return (
    <Table.Header
      headers={[
        "Nº Pedido",
        "Fecha",
        "Concepto",
        "Importe",
        "Saldo anterior",
        "Saldo posterior"
      ]}
    />
  );
};

export default Header;
