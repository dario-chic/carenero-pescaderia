import Information from "../components/Information";
import PageLayout from "../components/layouts/PageLayout";

export default function Home() {
  return (
    <PageLayout header={true}>
      <Information />
    </PageLayout>
  );
}
