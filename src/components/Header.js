import React from 'react';
import logoHeader from '../images/logo-header.svg';
import instagramIcon from '../images/instagram-icon.svg';
import vkIcon from '../images/vk-icon.svg';
import arrow from '../images/header-arrow.svg';

function Header() {
  return (
    <header className="header">
      <div className="header-top">
        <img src={logoHeader} alt="#" className="header-top__logo" />
        <nav className="header-top__nav">
          <a href="#" className="header-top__nav-link">О нас</a>
          <a href="#" className="header-top__nav-link">Галерея</a>
          <a href="#" className="header-top__nav-link">Абонементы</a>
          <a href="#" className="header-top__nav-link">Тренеры</a>
          <a href="#" className="header-top__nav-link">Контакты</a>
        </nav>
        <a href="tel:+74964161916" className="header-top__tel">+7 (496) 416-19-16</a>
      </div>
      <div className="header-bottom">
        <h1 className="header-bottom__title">Фитнес клуб Пантеон</h1>
        <span className="header-bottom__subtitle">Лучше нас только боги</span>
        <button className="header-bottom__btn"></button>
      </div>
      <div className="header__links">
        <img src={arrow} alt="Стрелка" className="header__arrow" />
        <a href="#" className="header__link">
          <img src={instagramIcon} alt="Инстаграм" className="header__link-icon" />
        </a>
        <a href="#" className="header__link">
          <img src={vkIcon} alt="Вконтакте" className="header__link-icon" />
        </a>
      </div>
    </header>
  );
}

export default Header;