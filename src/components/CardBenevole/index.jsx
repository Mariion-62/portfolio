import PropTypes from 'prop-types';
import { SCardBenevole, SButtonMore } from './style';

export default function CardBenevole({
  picture,
  listOne,
  listTwo,
  listThree,
  listFour,
  listFive,
}) {
  return (
    <>
      <SCardBenevole>
        <div className="cardBenevole">
          <img className="imgBenevole" src={picture} alt="" />
          <ul className="allListBenevole">
            <li className="itemsBenevole">{listOne}</li>

            <li className="itemsBenevole">{listTwo}</li>

            <li className="itemsBenevole">{listThree}</li>
            <li className="itemsBenevole">{listFive}</li>
          </ul>
          <SButtonMore>
            <div className="buttonMore">
              <a className="linkMore" href={listFour}>
                En savoir +
              </a>
            </div>
          </SButtonMore>
        </div>
      </SCardBenevole>
    </>
  );
}

CardBenevole.propTypes = {
  picture: PropTypes.string.isRequired,
  listOne: PropTypes.string.isRequired,
  listTwo: PropTypes.string.isRequired,
  listThree: PropTypes.string.isRequired,
  listFour: PropTypes.string.isRequired,
  listFive: PropTypes.string.isRequired,
};
