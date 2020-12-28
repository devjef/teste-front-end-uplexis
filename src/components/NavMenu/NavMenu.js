import React, { useState } from 'react';
import NavCard from '../../components/NavCard'

import { ReactComponent as Globe } from '../../assets/svg/globe-solid.svg';
import { ReactComponent as Briefcase } from '../../assets/svg/briefcase-solid.svg';
import { ReactComponent as University } from '../../assets/svg/university-solid.svg';
import { ReactComponent as TreeIcon } from '../../assets/svg/tree-solid.svg';
import { ReactComponent as Gavel } from '../../assets/svg/gavel-solid.svg';
import { ReactComponent as Ban } from '../../assets/svg/ban-solid.svg';
import { ReactComponent as GlobeAmericas } from '../../assets/svg/globe-americas-solid.svg';
import { ReactComponent as Gem } from '../../assets/svg/gem-solid.svg';
import { ReactComponent as Male } from '../../assets/svg/male-solid.svg';
import { ReactComponent as Piggy } from '../../assets/svg/piggy-bank-solid.svg';

function NavMenu({ categoryFilter }) {

    const [navItems, setNavItems] = useState([
        {
            icon: <Globe className="nav__icon" />,
            title: 'Todos',
            category: 'todos',
            active: true
        },
        {
            icon: <Briefcase className="nav__icon" />,
            title: 'Profissional',
            category: 'profissional',
            active: false
        },
        {
            icon: <University className="nav__icon" />,
            title: 'Reguladores',
            category: 'reguladores',
            active: false
        },
        {
            icon: <TreeIcon className="nav__icon" />,
            title: 'Sócio ambiental',
            category: 'socioAmbiental',
            active: false
        },
        {
            icon: <Gavel className="nav__icon" />,
            title: 'Jurídico',
            category: 'juridico',
            active: false
        },
        {
            icon: <Ban className="nav__icon" />,
            title: 'Listas Restritivas',
            category: 'listasRestritivas',
            active: false
        },
        {
            icon: <GlobeAmericas className="nav__icon" />,
            title: 'Mídia / Internet',
            category: 'midiaInternet',
            active: false
        },
        {
            icon: <Gem className="nav__icon" />,
            title: 'Bens e Imóveis',
            category: 'bensEimoveis',
            active: false
        },
        {
            icon: <Male className="nav__icon" />,
            title: 'Cadastro',
            category: 'cadastro',
            active: false
        },
        {
            icon: <Piggy className="nav__icon" />,
            title: 'Financeiro',
            category: 'financeiro',
            active: false
        }
    ]);

    function handleClickNavCard(e) {
        activeItem(e);
        categoryFilter(e);
    };

    function activeItem(e) {

        navItems.forEach(item => item.active = false);

        const index = e.target.getAttribute('index');
        navItems[index].active = true;

        setNavItems(navItems);
    };

    return (
        <div className="nav">
            {
                navItems.map((item, index) => {
                    return <NavCard key={index} index={index} icon={item.icon} title={item.title} category={item.category} active={item.active ? 'nav__item--active' : ''} onClick={handleClickNavCard} />
                })
            }

        </div>
    )
}

export default NavMenu;