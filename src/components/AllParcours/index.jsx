import { useEffect, useState } from 'react';
import BtnUp from 'components/BtnUp';
import { CardParcours, dataParcours } from 'components/CardParcours';

import { SAllParcours, STitleParcours } from './style';

export default function AllParcours() {
  const [allParcours, setAllParcours] = useState([]);
  useEffect(() => {
    const dataParcoursCopy = [...dataParcours];

    dataParcoursCopy.sort((a, b) => {
      const idA = new Date(a.id);
      const idB = new Date(b.id);
      return idB - idA;
    });

    setAllParcours(dataParcoursCopy);
  }, []);
  return (
    <>
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
        <BtnUp />
      </SAllParcours>
    </>
  );
}
