import { IoMailOutline } from 'react-icons/io5';
import SFooter from './style';

export default function footer() {
  const currentYear = new Date().getFullYear();
  return (
    <SFooter>
      <div className="footer">
        <p className="legalsMentions">mentions légales</p>
        <p className="copyright">Copyright {currentYear} </p>

        <a
          className="contact"
          href="mailto:mariongrolleau@neuf.fr"
          target="_blank"
          rel="noreferrer"
        >
          <IoMailOutline className="logoMail" size={30} />
        </a>
      </div>
    </SFooter>
  );
}
