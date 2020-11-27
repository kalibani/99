import PropTypes from 'prop-types';
import iconLove from 'assets/icons/love.svg';
import iconKT from 'assets/icons/Kamar Tidur.svg';
import iconKM from 'assets/icons/Kamar mandi.svg';
import iconLB from 'assets/icons/Luas Bangunan.svg';
import iconLT from 'assets/icons/Luas Tanah.svg';
import { Button } from 'components';

import './card.scss';

function Card({ handleClick, imgContent, cardType }) {
  return (
    <>
      <div className="card">
        <div className="card-content">
          <div className="card-img">
            <img src={imgContent} alt="img-home" />
          </div>
          <div className="card-caption">
            {
              cardType === 'main' ? (
                <>
                  <div className="card-caption-top">
                    <div className="card-caption-top-left">
                      <div className="card-sale-badge">Dijual</div>
                      <div className="card-nego-badge">Nego</div>
                    </div>
                    <div className="card-caption-top-right">
                      <div className="card-love-badge">
                        <img src={iconLove} alt="icon love" />
                      </div>
                    </div>
                  </div>
                  <div className="card-caption-midle">
                    <div className="price">
                      Rp 326 jt <span>Cicilan Rp 2,61jt/bln</span>
                    </div>
                  </div>
                  <div className="card-caption-bottom">
                    <ul>
                      <li>
                        <img src={iconKT} alt="icon" />
                        <span>2 K.Tidur</span>
                      </li>
                      <li>
                        <img src={iconKM} alt="icon" />
                        <span>2 K.Tidur</span>
                      </li>
                      <li>
                        <img src={iconLB} alt="icon" />
                        <span>65m2</span>
                      </li>
                      <li>
                        <img src={iconLT} alt="icon" />
                        <span>65m2</span>
                      </li>
                    </ul>
                  </div>
                </>
              ) : (
                <>
                  <div className="card-caption-map">
                    <div className="address">
                      J. Sukajadi No. 1 Bandung, Jawa Barat
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque semper, nibh sed posuere suscipit, sapien dolor pellentesque ante, nec feugiat augue magna et orci. Morbi rutrum tempor nibh, in congue nulla hendrerit nec.
                    </p>

                  </div>
                  <div className="empty-space" />
                </>
              )
            }

            <div className="card-button">
              <Button onClick={handleClick}>
                { cardType === 'main' ? 'Lihat Detail' : 'Tutup' }
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

Card.defaultProps = {
  handleClick: () => {},
  imgContent: '',
  cardType: 'main'
};

Card.propTypes = {
  handleClick: PropTypes.func,
  imgContent: PropTypes.string,
  cardType: PropTypes.string
};

export default Card;
