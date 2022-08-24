import PropTypes from 'prop-types';
import { IoLogoGithub } from 'react-icons/io5';
import SCardRealisation from './style';

export default function CardRealisation({
  title,
  picture,
  content,
  linkGithub,
  linkSite,
}) {
  return (
    <>
      <SCardRealisation>
        <div className="allCard">
          <h2 className="titleProject">{title} </h2>
          <a
            className="linkSite"
            href={linkSite}
            target="_blank"
            rel="noreferrer"
          >
            <img className="imgProject" src={picture} alt={title} />
          </a>
          <p className="contentProject">{content}</p>
          <a
            className="linkGithub"
            href={linkGithub}
            target="_blank"
            rel="noreferrer"
          >
            <IoLogoGithub size={50} />
          </a>
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
};
