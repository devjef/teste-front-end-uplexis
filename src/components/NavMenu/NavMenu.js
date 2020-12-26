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

import './style.scss';

function NavMenu() {

    const [navActive, setNavActive] = useState('');
    const [navItems, setNavItems] = useState([
        {
            icon: <Globe className="nav__icon" />,
            text: 'Todos',
            categoria: 'todos',
            active: true
        },
        {
            icon: <Briefcase className="nav__icon" />,
            text: 'Profissional',
            categoria: 'profissional',
            active: false
        },
        {
            icon: <University className="nav__icon" />,
            text: 'Reguladores',
            categoria: 'reguladores',
            active: false
        },
        {
            icon: <TreeIcon className="nav__icon" />,
            text: 'Sócio ambiental',
            categoria: 'socioAmbiental',
            active: false
        },
        {
            icon: <Gavel className="nav__icon" />,
            text: 'Jurídico',
            categoria: 'juridico',
            active: false
        },
        {
            icon: <Ban className="nav__icon" />,
            text: 'Listas Restritivas',
            categoria: 'listasRestritivas',
            active: false
        },
        {
            icon: <GlobeAmericas className="nav__icon" />,
            text: 'Mídia / Internet',
            categoria: 'midiaInternet',
            active: false
        },
        {
            icon: <Gem className="nav__icon" />,
            text: 'Bens e Imóveis',
            categoria: 'bensEimoveis',
            active: false
        },
        {
            icon: <Male className="nav__icon" />,
            text: 'Cadastro',
            categoria: 'cadastro',
            active: false
        },
        {
            icon: <Piggy className="nav__icon" />,
            text: 'Financeiro',
            categoria: 'financeiro',
            active: false
        }
    ]);

    function handleClickNavCard(e) {

        for(let i = 0; i < navItems.length; i++) {
            navItems[i].active = false;
        }

        const index = e.target.getAttribute('index');

        const novoEstado = {...navItems};
        novoEstado[index].active = true;
        setNavActive(novoEstado);

    };

    return (
        <div className="nav">
            {
                navItems.map((item, index) => {
                    return <NavCard key={index} index={index} icon={item.icon} text={item.text} categoria={item.categoria} active={item.active ? 'nav__item--active' : ''} onClick={handleClickNavCard} />
                })
            }

        </div>
    )
}

export default NavMenu;