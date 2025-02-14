import React from 'react';

import './what_are_we_doing.module.css'

import apple from './img/svg/apple.svg';
import android from './img/svg/android.svg';
import information from './img/svg/information.svg'

class What_are_we_doing extends React.Component {
  render () {
    return (
      <div id="what_are_we_doing" >
        <h1>Что мы делаем</h1>
        <div className="examples">
          <div className="example">
            <div className="text">
              <p>Мобильные приложения для iOS и Android платформ</p>
            </div>
            <div className="icons">
              <img src={apple} />
              <img src={android} />
            </div>
          </div>
          <div className="example">
            <div className="text">
              <p>Сложные веб-сервисы с использованием фреймворков</p>
              <p style={{color: '#9245FF', fontFamily: 'CeraPro-Bold'}}>Python   -   Flask    Django PHP   -   YII     Laravel     Symfony</p>
            </div>
          </div>
          <div className="example">
            <div className="text">
              <p>Пользовательские интерфейсы c использованием современных библиотек </p>
              <p style={{color: '#FF1705', fontFamily: 'CeraPro-Bold'}}>vue.js     angular.js    react.js</p>
            </div>
          </div>
          <div className="example">
            <div className="text">
              <p style={{color: '#6FCF97', fontFamily: 'CeraPro-Bold'}}>AR и VR приложения</p>
              <p>для смартфонов и планшетов (виртуальная реальность и дополненная реальность)</p>
            </div>
          </div>
          <div className="example">
            <div className="text">
              <p>Сайты на популярных CMS:</p>
              <p style={{color: '#0066FF', fontFamily: 'CeraPro-Bold'}}>Wordpress, ModX, Битрикс, Joomla, SimplaCMS, Open Cart, Django CMS.</p>
            </div>
          </div>
          <div className="spetial">
            <div className="special_icon">
              <img src={information} />
            </div>
            <div className="text">
              <p>Рассматриваем масштабные проекты, любим помогать большим IT-компаниям в качестве подрядчиков</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default What_are_we_doing;
