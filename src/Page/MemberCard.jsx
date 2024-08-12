import React from 'react';
import { baseMembership } from 'baseMembership';
import { MemberDiv } from './Membership.styled';
import { MemberForm } from './MemberCard.styled';
import { useParams } from 'react-router-dom';
import { NotFound } from 'Page';

export const MemberCard = () => {
  const { memberCard } = useParams();

  const visibleCard = baseMembership.find(card => card.id === memberCard);
  if (visibleCard) {
    const { fotoId, name, surname, activateDate, expiredDate } = visibleCard;
    return (
      <MemberDiv>
        <MemberForm>
          <img src={fotoId} alt={name} />
          <label>
            Прізвище:
            <input type="text" disabled value={surname} />
          </label>
          <label>
            Ім'я:
            <input type="text" disabled value={name} />
          </label>
          <label>
            Дата видачі свідотства:
            <input type="text" disabled value={activateDate} />
          </label>
          <label>
            Дійсно до:
            <input
              type="text"
              disabled
              value={expiredDate}
              className="active"
            />
          </label>
        </MemberForm>
      </MemberDiv>
    );
  } else {
    return <NotFound />;
  }
};
