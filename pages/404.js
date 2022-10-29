import NavCheckout from "../components/layouts/NavCheckout";
import PageLayout from "../components/layouts/PageLayout";
import Message from "../components/Message";
import Error from "../components/svg/Error";

export default function Home() {
  return (
    <PageLayout header={false} nav={<NavCheckout />}>
      {" "}
      <div className="full-message">
        <Message
          icon={<Error />}
          header="PÁGINA NO ENCONTRADA"
          msg={`No se encontraron resultados para esta busqueda.
`}
          action={{ link: "/", text: "Ir al Inicio" }}
        />
      </div>
    </PageLayout>
  );
}
