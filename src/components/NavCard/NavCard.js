import React from 'react';

function NavCard({ icon, text, categoria, onClick, active, index }) {

    function handleClick(e) {
        onClick(e)
    }

    return(
        <div className={`nav__item ${active}`} index={index} id={categoria} onClick={handleClick}>
                {icon}
                <p className="nav__text">{text}</p>
        </div>
    )
}

export default NavCard;