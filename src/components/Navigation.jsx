import React from 'react'
import logo from '../img/logo.png'


export const Navigation = () => {
  return (
    <nav>
          <img src={logo} alt="Logo" width={30} />
          <span>ГІЛЬДІЯ ФАХІВЦІВ З НЕРУХОМОСТІ УКРАЇНИ</span>

          <ul>
            <li>Домашня</li>
            <li>Новини</li>
            <li>Членство ГФНУ</li>
            <li>Контакти</li>
            <li>Про Нас</li>
          </ul>

          <button>Заявка на вступ</button>
      </nav>
  )
}
