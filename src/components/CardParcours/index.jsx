import PropTypes from 'prop-types';
import SCardParcours from './style';

export function CardParcours({
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

export const dataParcours = [
  {
    dateBegin: '2012',
    dateEnd: '2015',
    job: "Professeur d'Activités Physiques Adaptées et Santé",
    experience:
      'Mise en place d’un projet sportif en lien avec l’établissement spécialisé',
    picture: './assets/Logo_CDSA59.png',
    enterprise: 'CD Sport Adapté Nord',
    expTwo: 'Mise en place de séances sportives individuelle et collective',
    expThree: 'Être à l’écoute des sportifs',
  },
  {
    dateBegin: '2016',
    dateEnd: '2022',
    job: 'Conseillère Technique Fédérale',
    experience: 'Promouvoir le SA sur le territoire du Nord',
    picture: './assets/Logo_CDSA59.png',
    enterprise: 'CD Sport Adapté Nord',
    expTwo: 'Mise en place d’un calendrier sportif',
    expThree: 'Organisation d’événements sportifs (multisports)',
    expFour: 'Gestion des bénévoles',
    expFive: 'Relation avec les partenaires',
  },
  {
    dateBegin: '2021',
    dateEnd: '2022',
    job: 'Formation Développeur Web et Web Appli',
    experience: 'Front-end : JavaScript, ReactJS, HTML, CSS',
    picture: './assets/Logo_WCS.png',
    enterprise: 'Wild Code School',
    expTwo: 'Back-end : Node.JS, Express',
    expThree: 'BDD : MySQL Workbench',
    expFour: 'Outils: Git, GitHub, Postman',
  },
  {
    dateBegin: '04/2022',
    dateEnd: '07/2022',
    job: 'Développeuse Front-End - React',
    experience: 'Front-end: React, CSS',
    picture: './assets/Logo_SYB.png',
    enterprise: 'Shake Your Business',
    expTwo: 'Outils: Styled-Components,Trello, GitHub',
    expThree:
      "Développement d'une onePage dynamiqu - Réalisation de tests unitaires",
  },
  {
    dateBegin: '11/2022',
    dateEnd: "Aujourd'hui",
    job: 'Développeuse Fullstack Back-End - Node.JS',
    experience:
      "Développement de features (création d'API) - Réalisation de tests unitaires et tests d'intégration - Participation au comité projet",
    picture: '',
    enterprise: 'Repozen',
    expTwo: 'Back-end: Node.JS, Fastify, TypeScript',
    expThree: 'BDD: MongoDB',
    expFour:
      'Outils: Git, GitLab, MongoCompass, Postman, Jest, Swagger/openAPI',
  },
];
