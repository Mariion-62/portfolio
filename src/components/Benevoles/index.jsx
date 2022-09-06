import { toast } from 'react-toastify';
import axios from 'axios';
import CardBenevole from 'components/CardBenevole';
import { useEffect, useState } from 'react';

import { SBenevole, STitleBenevole } from './style';

export default function Benevoles() {
  const [benevoles, setBenevoles] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:5050/benevole`)
      .then(({ data }) => {
        setBenevoles(data);
      })
      .catch(() => {
        toast('ERROR');
      });
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
