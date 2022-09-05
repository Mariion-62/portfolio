import { toast } from 'react-toastify';
import axios from 'axios';
import CardParcours from 'components/CardParcours';
import { useEffect, useState } from 'react';

import Header from 'components/Header';
import Description from 'components/Description';
import { SAllParcours, STitleParcours } from './style';

export default function AllParcours() {
  const [allParcours, setAllParcours] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:5050/parcours`)
      .then(({ data }) => {
        setAllParcours(data);
      })
      .catch(() => {
        toast('ERROR');
      });
  }, []);
  return (
    <>
      <Header />
      <Description />
      <STitleParcours>
        <h2 className="titleExpPro">Expériences professionnelles</h2>
      </STitleParcours>
      <SAllParcours>
        <div className="parcours">
          {allParcours.map((oneParcours) => {
            return (
              <div className="cardParcours">
                <CardParcours
                  dateBegin={oneParcours.dateBegin}
                  dateEnd={oneParcours.dateEnd}
                  job={oneParcours.job}
                  enterprise={oneParcours.enterprise}
                  experience={oneParcours.experience}
                  picture={oneParcours.picture}
                  expTwo={oneParcours.expTwo}
                  expThree={oneParcours.expThree}
                  expFour={oneParcours.expFour}
                  expFive={oneParcours.expFive}
                />
              </div>
            );
          })}
        </div>
      </SAllParcours>
    </>
  );
}
