import React from 'react';
import member from '../img/preimushchestvo.jpg';
import { MemberDiv } from './Membership.styled';
import { Outlet, Link } from 'react-router-dom';

export const Membership = () => {
  return (
    <>
      <MemberDiv>
        <img src={member} alt="membership" />
        <h2>Набуття членства в ГФНУ</h2>
      </MemberDiv>
      <Outlet />
    </>
    // <Accordion defaultActiveKey="0" flush>
    //   <Accordion.Item eventKey="0">
    //     <Accordion.Header>Набуття членства в ГФНУ</Accordion.Header>
    //     <Accordion.Body>
    //       <ol>
    //         <li>
    //           Рієлтор подає заяву на вступ до лав ГФНУ, на ім'я Голови
    //           сертифікаційної ради ГФНУ. <br /> Форма заяви вільна. Заява
    //           подається на наш:
    //           <br /> Viber ....
    //           <br /> Whatsapp.....
    //           <br /> Telegram...
    //           <br /> Instagram....
    //           <br /> Вказується область в якій працює рієлтор. Також вказується
    //           як пишеться його (її) ім'я та прізвище англійською мовою. Якщо
    //           рієлтор є співробітником Агенції Нерухомості вказується назва
    //           Агенції українською та англійською мовами. Вказується телефон для
    //           зв'язку і номер відділення Укрпошти чи Нової Пошти.
    //         </li>
    //         <li>
    //           Здобувач висилає фото першої сторінки свого паспорта чи
    //           закордонного паспорта.
    //         </li>
    //         <li>Своє фото для посвідчення.</li>
    //         <li>
    //           Свідоцтво та сертифікат ГФНУ видаються безкоштовно, але треба
    //           сплатити послуги друкарні у розмірі .... на карту ..... з
    //           вказівкою" друк для ГФНУ ".
    //         </li>
    //         <li>
    //           Після перевірки даних рієлтор і виготовлення свідоцтва і
    //           посвідчення (приблизно тиждень) вони будуть надіслані на
    //           відповідне поштове відділення.
    //         </li>
    //       </ol>
    //       <span>
    //         Для отримання свідоцтва Агенції Нерухомості як колективного члена
    //         треба, щоб в Агенції було не менше двох рієлторів членів ГФНУ. Всі
    //         свідоцтва видаються терміном на два роки.
    //       </span>
    //     </Accordion.Body>
    //   </Accordion.Item>
    //   <Accordion.Item eventKey="1">
    //     <Accordion.Header>Accordion Item #2</Accordion.Header>
    //     <Accordion.Body>
    //       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    //       eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
    //       minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    //       aliquip ex ea commodo consequat. Duis aute irure dolor in
    //       reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
    //       pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
    //       culpa qui officia deserunt mollit anim id est laborum.
    //     </Accordion.Body>
    //   </Accordion.Item>
    // </Accordion>
  );
};
