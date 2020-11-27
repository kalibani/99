import headerImageLeft from 'assets/images/TEST.png';
import headerImageRight from 'assets/images/FRONTend.png';

import './header.scss';

function Header() {
  return (
    <>
      <header>
        <div className="header-container">
          <div className="header-image">
            <img src={headerImageLeft} alt="imgHeader" />
          </div>
          <div className="header-image">
            <img src={headerImageRight} alt="imgHeader" />
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
