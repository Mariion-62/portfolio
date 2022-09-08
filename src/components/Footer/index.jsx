import { IoMailOutline } from 'react-icons/io5';
import SFooter from './style';

export default function footer() {
  const currentYear = new Date().getFullYear();
  return (
    <SFooter>
      <div className="footer">
        <p>mentions légales</p>
        <p>Copyright {currentYear} </p>
        <div className="contact">
          <a
            href="mailto:mariongrolleau@neuf.fr"
            target="_blank"
            rel="noreferrer"
          >
            <IoMailOutline className="logoMail" size={30} />
          </a>
        </div>
      </div>
    </SFooter>
  );
}
