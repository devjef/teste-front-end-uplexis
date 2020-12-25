import React from 'react';

function NavCard({ icon, text, categoria, active }) {
    return(
        <div className={`nav__item nav__item--${active}`} id={categoria}>
                {icon}
                <p className="nav__text">{text}</p>
        </div>
    )
}

export default NavCard;