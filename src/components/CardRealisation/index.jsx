import PropTypes from 'prop-types';
import { IoLogoGithub, IoPeopleSharp, IoTimeSharp } from 'react-icons/io5';
import SCardRealisation from './style';

export function CardRealisation({
  title,
  picture,
  content,
  linkGithub,
  linkSite,
  group,
  time,
  problematique,
  linkGithubBack,
}) {
  return (
    <>
      <SCardRealisation>
        <div className="allCard">
          <h2 className="titleProject">{title} </h2>
          <div className="groupTime">
            <div className="groupProject">
              <p>
                <IoPeopleSharp size={25} />
              </p>
              <p className="contentGroup">: {group}</p>
            </div>
            <div className="timeProject">
              <p>
                <IoTimeSharp size={25} />
              </p>
              <p className="contentTime"> : {time}</p>
            </div>
          </div>
          <a
            className="linkSite"
            href={linkSite}
            target="_blank"
            rel="noreferrer"
          >
            <img className="imgProject" src={picture} alt={title} />
          </a>
          <p className="problematiqueProject">
            Problématique : {problematique}
          </p>
          <p className="contentProject">{content}</p>
          <div className="gitHub">
            {linkGithub && (
              <a
                className="linkGithub"
                href={linkGithub}
                target="_blank"
                rel="noreferrer"
              >
                <p className="textGithub">Front-End</p>
                <IoLogoGithub className="ioLogoGithub" />
              </a>
            )}
            {linkGithubBack && (
              <a
                className="linkGithub"
                href={linkGithubBack}
                target="_blank"
                rel="noreferrer"
              >
                <p className="textGithub">Back-End</p>
                <IoLogoGithub className="ioLogoGithub" />
              </a>
            )}
          </div>
        </div>
      </SCardRealisation>
    </>
  );
}

CardRealisation.propTypes = {
  title: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  linkGithub: PropTypes.string.isRequired,
  linkSite: PropTypes.string.isRequired,
  group: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  problematique: PropTypes.string.isRequired,
  linkGithubBack: PropTypes.string.isRequired,
};

export const dataRealisation = [
  {
    title: 'Wild Green Project',
    picture: './assets/wildGreenSchool.png',
    content:
      'Parmi toutes les thématiques proposées avec mon groupe nous avons choisi la Wild Green School - Pour une Wild Code School plus verte. Nous nous sommes répartis les tâches en binôme ou solo en fonction de la feature. La prise en main des outils notamment Git n’a pas été simple, mais avec l’entraide et l’écoute nous avons réussi à finaliser notre projet !',
    linkGithub: 'https://github.com/Mariion-62/Projet-1---Wild-Green-School-',
    linkSite: 'https://nacymeg.github.io/Projet-1---Wild-Green-School-/',
    group: '5',
    time: '2 semaines',
    problematique:
      'Réaliser un projet de site web statique\nWireframe réalisé en groupe\nCodé en HTML, CSS\nHerbergé sur github.io\n',
  },
  {
    title: 'Wild Heroes',
    picture: './assets/wildHeroes.png',
    content:
      "Nous sommes partis sur SuperHero API. Nous avons d’abord pensé au concept de notre webapp puis nous l'avons maquetté. Une fois la maquette validée par tous, nous avons créé un backlog afin d’avoir les features et se les répartir. Il y a eu des tâches plus ou moins simples à réaliser. Dès qu’il y avait quelqu’un de bloqué on l’aidait afin de résoudre le problème au plus vite.",
    linkGithub: 'https://github.com/Mariion-62/react-superHeros',
    linkSite: 'https://wild-heroes.netlify.app/',
    group: '5',
    time: '4 semaines',
    problematique:
      'Construire une webapp dynamique où les données proviennent d’une API.',
  },
  {
    title: 'eQAI',
    picture: './assets/eQAI.png',
    content:
      "Sur ce projet, j’avais pour rôle d’être le Product Owner. Une maquette et un backlog ont été créés et validés par les clients. Notre organisation : On se répartissait les tâches en fonction des compétences que l’on souhaitait développer (plus orienté front-end ou back-end). Toutes les semaines, nous faisions une présentation des avancées. En fonction des retours des clients, des modifications étaient à faire puis les features à développer sur le sprint suivant. Mon rôle (avec l’avis de mes collègues) était de valider ou non les demandes du client. Expliquer si c’était réalisable dans les temps, si nous avions la compétence pour etc… Nous avons tous bien progressé sur des axes où nous étions le moins à l’aise. Le fait de s’entraider a été très bénéfique pour moi. A l'issue des 7 semaines une présentation a été faite lors du Demo Day devant les collègues de formation, les formateurs ainsi que les autres clients.",
    linkGithub: 'https://github.com/Mariion-62/eQay-frontend',
    linkSite: 'https://eqai.org/',
    group: '4',
    time: '7 semaines',
    problematique:
      'Pour l’association eQAI, faire un site web affichant des capteurs internes (créer par le capteur français) et externes( en récupérant les données via l’API Atmo) permettant de mesurer la qualité d’air (intérieur / extérieur) sur une carte.',
    linkGithubBack: 'https://github.com/Mariion-62/eQay-backend',
  },
  {
    title: 'Hackathon Music',
    picture: './assets/hackathonMusic.png',
    content:
      "Le thème du hackathon était la musique. Étant vers la période de Noël, nous avons décidé de faire un calendrier de l’avent musical. Les utilisateurs auront la possibilité d’écouter la musique mais également d'avoir les partitions afin de la jouer avec un instrument de musique disponible. D’avoir un temps limité pour réaliser cette app était très stimulant et enrichissant ! J’ai beaucoup aimé ce format !",
    linkGithub: 'https://github.com/Mariion-62/HackatonMusic',
    linkSite: 'https://hackaton-music.netlify.app/',
    group: '5',
    time: '3 jours',
    problematique: 'Créer une app web en utilisant une API',
  },
  {
    title: 'Agence SYB',
    picture: './assets/agenceSyb.png',
    content:
      "J'ai effectué mon stage au sein de l’Agence Syb pour une durée de 6 mois. une de mes missions a été de créer un site One Page fait en React.JS. Avant de commencer j’ai    configuré mon pc, installation de linux, de git, création d’un gitHub etc… J’ai dû faire pas mal de recherches pour réussir à faire des animations plus ou moins complexes. Ce projet m’a plu et m’a appris à être autonome, chercher, fouiller pour trouver des réponses à mes problèmes. J’ai également dû m’adapter et modifier mon code en fonction des retours sur le design.",
    linkGithub: 'https://github.com/Mariion-62/Agence-syb',
    group: '1',
    time: '4 mois',
    problematique: 'Créer une app web sous forme d’une one page',
  },
];
