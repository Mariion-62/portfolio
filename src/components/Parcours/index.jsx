import AllParcours from 'components/AllParcours';
import Benevoles from 'components/Benevoles';
import Description from 'components/Description';
import Header from 'components/Header';
import Footer from 'components/Footer';

export default function Parcours() {
  return (
    <>
      <Header />
      <Description />
      <AllParcours />
      <Benevoles />
      <Footer />
    </>
  );
}
