import React from 'react';
import girlPhoto from '../images/info-photo.png';
import gymPhoto from '../images/info-photo-gym.png';
import iconTrain from '../images/advantage-icon-train.png';
import iconGym from '../images/advantage-icon-gym.png';
import iconPlace from '../images/advantage-icon-place.png';
import iconWallet from '../images/advantage-icon-wallet.png';


function About() {
  return (
    <>
      <div className="info">

        <div className="info-lifestyle">
          <img src={girlPhoto} alt="Фото зала" className="info-lifestyle__photo" />
          <img src={gymPhoto} alt="Фото оборудования" className="info-lifestyle__photo-gym" />
          <div className="info-lifestyle__content">
            <h2 className="info-lifestyle__heading">Новый образ жизни</h2>
            <span className="info-lifestyle__text">Став частью нашей команды, вы сможете изменить привычный ритм жизни и сделать каждый свой день особенным, а формат наших тренировок позволит вам раскрыть потенциал вашего тела на 100%.</span>
            <button className="info-lifestyle__btn">
              <span className="info-lifestyle__btn-text">Получить консультацию</span>
            </button>
          </div>
        </div>

        <div className="info-advantages">
          <div className="info-advantage">
            <img src={iconTrain} alt="Тренажеры" className="info-advantage__icon" />
            <span className="info-advantage__text">Полностью укомплектованный зал</span>
          </div>

          <div className="info-advantage">
            <img src={iconGym} alt="Оборудование" className="info-advantage__icon" />
            <span className="info-advantage__text">Профессиональное оборудование</span>
          </div>

          <div className="info-advantage">
            <img src={iconPlace} alt="Расположение" className="info-advantage__icon" />
            <span className="info-advantage__text">Удобное расположение в центре города</span>
          </div>

          <div className="info-advantage">
            <img src={iconWallet} alt="Стоимость" className="info-advantage__icon" />
            <span className="info-advantage__text">Доступная стоимость занятий</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;