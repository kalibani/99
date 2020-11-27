import { useState } from 'react';

import {
  Header, Modal, Card
} from 'components';

import imgHome from 'assets/images/home.jpg';
import imgMap from 'assets/images/map.png';
import iconArrow from 'assets/icons/arrow.svg';
import iconArrowLeft from 'assets/icons/arrow left.svg';
import './home.scss';

function Home() {
  const [isShow, setShow] = useState(false);
  const [isSecondShow, setSecondShow] = useState(false);
  const [opacity, setOpacity] = useState('');

  const handleClick = () => {
    setOpacity('modal-show');
    setShow(!isShow);
  };

  const handleClickSecond = () => setSecondShow(!isSecondShow);

  const handleClose = () => {
    setShow(false);
    setSecondShow(false);

    setTimeout(() => {
      setOpacity('');
    }, 500);
  };

  return (
    <>
      <div className={`container ${opacity}`}>
        <Header />
        <div className="container-main">
          <div className="content-wrapper">
            <div className="row">
              <div className="col-7 col-sm-12">
                <h1>Start Your Journey</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque semper, nibh sed posuere suscipit, sapien dolor pellentesque ante, nec feugiat augue magna et orci. Morbi rutrum tempor nibh, in congue nulla hendrerit nec.</p>
              </div>
              <div className="col-5 col-sm-12">
                <div className="carousel">
                  <div className="carousel-icon-left">
                    <img src={iconArrow} alt="icon" />
                  </div>
                  <div className="card-wrapper">
                    <Card imgContent={imgHome} handleClick={handleClick} cardType="main" />
                  </div>
                  <div className="carousel-icon-right">
                    <img src={iconArrowLeft} alt="icon" />
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal show={isShow}>
        <Card imgContent={imgHome} handleClick={handleClickSecond} cardType="main" />
      </Modal>
      <Modal show={isSecondShow} variant="double-modal">
        <Card imgContent={imgMap} handleClick={handleClose} cardType="second" />
      </Modal>
    </>
  );
}

export default Home;
