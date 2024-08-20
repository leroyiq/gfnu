import React from 'react';
import { MemberDiv } from './Membership.styled';
import { FaViber } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import { FaTelegram } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

export const Contacts = () => {
  return (
    <MemberDiv>
      <h2>Наші контакти</h2>
      <ul>
        {/* <li className="contactsItem">
          <ImLocation className="contactIcon" />
          Юридична адреса
          <br /> 61057, м. Харків, пров. Театральний, 4
        </li>
        <li className="contactsItem">
          <FcBusinessman className="contactIcon" />
          Керівник
          <br /> Молчанов Євгеній Миколайович
        </li> */}
        <li className="contactsItem">
          <a href="viber://chat?number=%2B380632481234">
            <FaViber className="contactIcon" />
            Viber
          </a>
        </li>
        <li className="contactsItem">
          <a href="https://wa.me/380632481234">
            <FaWhatsapp className="contactIcon" />
            Whatsapp
          </a>
        </li>
        <li className="contactsItem">
          <a href="https://t.me/dmitro_kh">
            <FaTelegram className="contactIcon" />
            Telegram
          </a>
        </li>
        <li className="contactsItem">
          <FaInstagram className="contactIcon" />
          Instagram
        </li>
      </ul>
    </MemberDiv>
  );
};
