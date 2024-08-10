import React from 'react';
import { MemberDiv } from './Membership.styled';
import { ImLocation } from 'react-icons/im';
import { FcBusinessman } from 'react-icons/fc';
import { FaViber } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import { FaTelegram } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

export const Contacts = () => {
  return (
    <MemberDiv>
      <h2>Наші контакти</h2>
      <ul>
        <li className="contactsItem">
          <ImLocation className="contactIcon" />
          Юридична адреса
          <br /> 61057, м. Харків, пров. Театральний, 4
        </li>
        <li className="contactsItem">
          <FcBusinessman className="contactIcon" />
          Керівник
          <br /> Молчанов Євгеній Миколайович
        </li>
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
