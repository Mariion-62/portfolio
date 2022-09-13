import CardHomepage from 'components/CardHomepage';
import Header from '../Header';
import Footer from '../Footer';
import SHomepage from './style';

export default function Homepage() {
  return (
    <SHomepage>
      <Header />
      <CardHomepage />
      <Footer />
    </SHomepage>
  );
}
