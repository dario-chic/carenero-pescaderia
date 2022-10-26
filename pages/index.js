import { useDispatch } from "react-redux";
import Catalogo from "../components/Catalogo";
import Information from "../components/Information";
import PageLayout from "../components/layouts/PageLayout";

export default function Home() {
  const dispatch = useDispatch();
  return (
    <PageLayout header={true}>
      <Information />
      <Catalogo />
    </PageLayout>
  );
}
