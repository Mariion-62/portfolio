import { useState } from 'react';
import { IoArrowUpCircleOutline } from 'react-icons/io5';
import SBtnUp from './style';

export default function BtnUp() {
  // Change state at onClick and scroll up at header
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  window.addEventListener('scroll', toggleVisible);

  return (
    <>
      <SBtnUp>
        <button
          type="button"
          className="btnUp"
          onClick={scrollToTop}
          style={{ display: visible ? 'inline' : 'none' }}
        >
          <IoArrowUpCircleOutline size={40} />
        </button>
      </SBtnUp>
    </>
  );
}
