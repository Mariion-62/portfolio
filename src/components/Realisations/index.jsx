import { toast } from 'react-toastify';
import axios from 'axios';
import CardRealisation from 'components/Realisation';
import { useEffect, useState } from 'react';

// import CardRealisation from 'components/Realisation';
import Header from 'components/Header';
import SRealisations from './style';

export default function Realisations() {
  const [cardRealisations, setCardRealisations] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:5050/realisations`)
      .then(({ data }) => {
        setCardRealisations(data);
      })
      .catch(() => {
        toast('ERROR');
      });
  }, []);
  return (
    <>
      <Header />
      <SRealisations>
        {cardRealisations.map((cardRealisation) => {
          return (
            <CardRealisation
              title={cardRealisation.title}
              picture={cardRealisation.picture}
              content={cardRealisation.content}
            />
          );
        })}
      </SRealisations>
    </>
  );
}
