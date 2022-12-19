import PropTypes from 'prop-types';
import SCardParcours from './style';

export default function CardParcours({
  dateBegin,
  dateEnd,
  job,
  experience,
  picture,
  enterprise,
  expTwo,
  expThree,
  expFour,
  expFive,
}) {
  return (
    <>
      <SCardParcours>
        <div className="cardParcours">
          <h3 className="dateParcours">
            {dateBegin} - {dateEnd}
          </h3>
          <p className="job">{job}</p>
          <p className="enterprise">{enterprise}</p>
          <ul className="xpParcours">
            <li className="listParcours">{experience}</li>
            <li className="listParcours">{expTwo}</li>
            <li className="listParcours">{expThree}</li>
            <li className="listParcours">{expFour}</li>
            <li className="listParcours">{expFive}</li>
          </ul>
          <div className="logoParcours">
            <img className="pictureParcours" src={picture} alt={enterprise} />
          </div>
        </div>
      </SCardParcours>
    </>
  );
}

CardParcours.propTypes = {
  dateBegin: PropTypes.string.isRequired,
  dateEnd: PropTypes.string.isRequired,
  job: PropTypes.string.isRequired,
  experience: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  enterprise: PropTypes.string.isRequired,
  expTwo: PropTypes.string.isRequired,
  expThree: PropTypes.string.isRequired,
  expFour: PropTypes.string.isRequired,
  expFive: PropTypes.string.isRequired,
};
