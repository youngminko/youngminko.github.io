import React from 'react';

const Skillcard = ({ skill: { icon, title, about, about2, about3 } }) =>
    <div className="col-lg-4">
        <div className="skill-card">
           
            <div className="skill-card-body">
            <img src={icon} alt="icon" className="skill-card__icon" />
                <h6 className="skill-card__title">{title}</h6>
                <p className="skill_card__content">{about}</p>
                <p className="skill_card__content2">{about2}</p>
                <p className="skill_card__content3">{about3}</p>
            </div>
        </div>
    </div>

export default Skillcard;