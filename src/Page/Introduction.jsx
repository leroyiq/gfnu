import React from 'react';
import { MemberDiv } from './Membership.styled';
import { FaInstagram, FaTelegram, FaViber, FaWhatsapp } from 'react-icons/fa';

export const Introduction = () => {
  return (
    <MemberDiv>
      <h3>Набуття членства у ГФНУ.</h3>
      <ol>
        <li>
          Ріелтор подає заяву на вступ до лав ГФНУ, на ім'я голови
          сертифікаційної ради ГФНУ. Форма заяви вільна.
          <br />
          Заява подається на наш: Viber, Whatsapp, Telegram, Instagram.
          Вказується область в якій працює ріелтор. Також вказується як пишеться
          його (її) ім'я та прізвище англійською мовою. <br /> Якщо ріелтор є
          співробітником Агенції Нерухомості вказується назва Агенції
          українською та англійською мовами. <br /> Вказується телефон для
          зв'язку і номер відділення Укрпошти чи Нової Пошти.
        </li>
        <li>
          Здобувач висилає фото першої сторінки свого паспорта чи закордонного
          паспорта.
        </li>
        <li>Своє фото для посвідчення.</li>
        <li>
          Свідоцтво та сертифікат ГФНУ видаються безкоштовно, але треба сплатити
          послуги друкарні у розмірі .... на карту ..... з вказівкою" друк для
          ГФНУ ".
        </li>
        <li>
          Після перевірки даних ріелтор і виготовлення свідоцтва і посвідчення
          (приблизно тиждень) вони будуть надіслані на відповідне поштове
          відділення.
        </li>
      </ol>
      <span>
        Для отримання свідоцтва Агенції Нерухомості як колективного члена треба,
        щоб в Агенції було не менше двох ріелтор членів ГФНУ. Всі свідоцтва
        видаються терміном на два роки.
      </span>
      <h3>Вступити до ГФНУ</h3>
      <ul>
        <li className="contactsItem">
          <FaViber className="contactIcon" />
          Viber
        </li>
        <li className="contactsItem">
          <FaWhatsapp className="contactIcon" />
          Whatsapp
        </li>
        <li className="contactsItem">
          <FaTelegram className="contactIcon" />
          Telegram
        </li>
        <li className="contactsItem">
          <FaInstagram className="contactIcon" />
          Instagram
        </li>
      </ul>
    </MemberDiv>
  );
};
