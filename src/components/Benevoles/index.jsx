import { CardBenevole, dataBenevole } from 'components/CardBenevole';
import { useEffect, useState } from 'react';

import { SBenevole, STitleBenevole } from './style';

export default function Benevoles() {
  const [benevoles, setBenevoles] = useState([]);
  useEffect(() => {
    setBenevoles(dataBenevole);
  }, []);
  return (
    <>
      <STitleBenevole>
        <h2 className="titleBenevole">Expériences personnelles</h2>
      </STitleBenevole>
      <SBenevole>
        {benevoles.map((benevole) => {
          return (
            <>
              <div className="cardBenevole">
                <CardBenevole
                  picture={benevole.picture}
                  listOne={benevole.listOne}
                  listTwo={benevole.listTwo}
                  listThree={benevole.listThree}
                  listFour={benevole.listFour}
                  listFive={benevole.listFive}
                />
              </div>
            </>
          );
        })}
      </SBenevole>
    </>
  );
}
