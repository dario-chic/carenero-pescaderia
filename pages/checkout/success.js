import NavCheckout from "../../components/layouts/NavCheckout";
import PageLayout from "../../components/layouts/PageLayout";
import Message from "../../components/Message";
import Cart2 from "../../components/svg/Cart2";

export default function Home() {
  return (
    <PageLayout header={false} nav={<NavCheckout />}>
      {" "}
      <div className="full-message">
        <Message
          icon={<Cart2 />}
          header="¡Pedido Realizado con Éxito!"
          msg={`Tu ordén ya fue procesada y envíada.
          
En breve nos pondremos en contacto 
contigo para concretar la compra.`}
          action={{ link: "/", text: "Volver al Inicio" }}
          ws={true}
        />
      </div>
    </PageLayout>
  );
}
