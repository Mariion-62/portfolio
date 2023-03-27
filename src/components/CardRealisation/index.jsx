import PropTypes from 'prop-types';
import { IoLogoGithub, IoPeopleSharp, IoTimeSharp } from 'react-icons/io5';
import SCardRealisation from './style';

export default function CardRealisation({
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
