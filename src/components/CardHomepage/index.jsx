import { Link } from 'react-router-dom';
import bgPurple from './bgPurple.png';
import bgPink from './bgPink.png';
import SCardHomepage from './style';

export default function CardHomepage() {
  return (
    <>
      <SCardHomepage>
        <section className="allCards">
          <div className="card">
            <Link id="parcours" className="link" to="/mon-parcours">
              <img
                className="imgCardHomepage"
                src={bgPurple}
                alt="Mon parcours"
              />
              <h2 className="titleCardHomepage"> Mon parcours</h2>
            </Link>
          </div>
          <div className="card">
            <Link id="realisations" className="link" to="/mes-realisations">
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
