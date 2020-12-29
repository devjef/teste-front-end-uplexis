import React from 'react';

function NavCard({ icon, title, category, onClick, active, index }) {

    function handleClick(e) {
        onClick(e)
    };

    return(
        <div className={`nav__item ${active}`} index={index} id={category} onClick={handleClick}>
               {icon}
                <p className="nav__text">{title}</p>
        </div>
    );
};

export default NavCard;