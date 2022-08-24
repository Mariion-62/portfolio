import { Link } from 'react-router-dom';
import Header from '../Header';
import bgPurple from './bgPurple.png';
import bgPink from './bgPink.png';
import SCardHomepage from './style';

export default function Homepage() {
  return (
    <>
      <Header />
      <SCardHomepage>
        <section className="allCards">
          <div className="card">
            <Link id="parcours" to="/mon-parcours">
              <img
                className="imgCardHomepage"
                src={bgPurple}
                alt="Mon parcours"
              />
              <h2 className="titleCardHomepage"> Mon parcours</h2>
            </Link>
          </div>
          <div className="card">
            <Link id="realisations" to="/mes-realisations">
              <img
                className="imgCardHomepage"
                src={bgPink}
                alt="Mon parcours"
              />
              <h2 className="titleCardHomepage"> Mes réalisations</h2>
            </Link>
          </div>
        </section>
      </SCardHomepage>
    </>
  );
}
