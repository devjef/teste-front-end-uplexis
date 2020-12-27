import React, { useState, useEffect } from 'react';
import SelectOrder from '../SelectOrder';
import ProductCard from '../ProductCard';

import { ReactComponent as Briefcase } from '../../assets/svg/briefcase-solid.svg';
import { ReactComponent as University } from '../../assets/svg/university-solid.svg';
import { ReactComponent as TreeIcon } from '../../assets/svg/tree-solid.svg';
import { ReactComponent as Gavel } from '../../assets/svg/gavel-solid.svg';
import { ReactComponent as Ban } from '../../assets/svg/ban-solid.svg';
import { ReactComponent as GlobeAmericas } from '../../assets/svg/globe-americas-solid.svg';
import { ReactComponent as Gem } from '../../assets/svg/gem-solid.svg';
import { ReactComponent as Male } from '../../assets/svg/male-solid.svg';
import { ReactComponent as Piggy } from '../../assets/svg/piggy-bank-solid.svg';

function Products() {

    const [order, setOrder] = useState('');
    const [products, setProducts] = useState([
        {
            id: 1,
            icon: <Briefcase className="products__icon" />,
            title: 'Profissional',
            text: '',
            price: 'R$ 29,99',
            category: 'profissional'
        },
        {
            id: 2,
            icon: <University className="products__icon" />,
            title: 'Reguladores',
            price: 'R$ 29,99',
            text: 'O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos Diários Oficiais de empresas S.A., de capital aberto e limitadas (LTDA) de grande porte.',
            category: 'reguladores'
        },
        {
            id: 3,
            icon: <TreeIcon className="products__icon" />,
            title: 'Sócio Ambiental',
            price: 'R$ 29,99',
            text: 'O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos Diários Oficiais de empresas S.A., de capital aberto e limitadas (LTDA) de grande porte.',
            category: 'socioAmbiental'
        },
        {
            id: 4,
            icon: <Gavel className="products__icon" />,
            title: 'Jurídico',
            price: 'R$ 29,99',
            text: 'O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos Diários Oficiais de empresas S.A., de capital aberto e limitadas (LTDA) de grande porte.',
            category: 'juridico'
        },
        {
            id: 5,
            icon: <Ban className="products__icon" />,
            title: 'Listas Restritivas',
            price: 'R$ 29,99',
            text: 'O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos Diários Oficiais de empresas S.A., de capital aberto e limitadas (LTDA) de grande porte.',
            category: 'listasRestritivas'
        },
        {
            id: 6,
            icon: <GlobeAmericas className="products__icon" />,
            title: 'Mídia / Internet',
            price: 'R$ 29,99',
            text: 'O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos Diários Oficiais de empresas S.A., de capital aberto e limitadas (LTDA) de grande porte.',
            category: 'midiaInternet'
        },
        {
            id: 7,
            icon: <Gem className="products__icon" />,
            title: 'Bens e Imóveis',
            price: 'R$ 29,99',
            text: 'O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos Diários Oficiais de empresas S.A., de capital aberto e limitadas (LTDA) de grande porte.',
            category: 'bensEimoveis'
        },
        {
            id: 8,
            icon: <Male className="products__icon" />,
            title: 'Cadastro',
            price: 'R$ 29,99',
            text: 'O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos Diários Oficiais de empresas S.A., de capital aberto e limitadas (LTDA) de grande porte.',
            category: 'Cadastro'
        },
        {
            id: 9,
            icon: <Piggy className="products__icon" />,
            title: 'Financeiro',
            price: 'R$ 29,99',
            text: 'O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos Diários Oficiais de empresas S.A., de capital aberto e limitadas (LTDA) de grande porte.',
            category: 'Financeiro'
        },
        {
            id: 10,
            icon: <Piggy className="products__icon" />,
            title: 'Financeiro',
            price: 'R$ 29,99',
            text: 'O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos Diários Oficiais de empresas S.A., de capital aberto e limitadas (LTDA) de grande porte.',
            category: 'Financeiro'
        },
        {
            id: 11,
            icon: <TreeIcon className="products__icon" />,
            title: 'Sócio Ambiental',
            price: 'R$ 29,99',
            text: 'O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos Diários Oficiais de empresas S.A., de capital aberto e limitadas (LTDA) de grande porte.',
            category: 'socioAmbiental'
        },
        {
            id: 12,
            icon: <Piggy className="products__icon" />,
            title: 'Financeiro',
            price: 'R$ 29,99',
            text: 'O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos Diários Oficiais de empresas S.A., de capital aberto e limitadas (LTDA) de grande porte.',
            category: 'Financeiro'
        }
    ])

    useEffect(() => {
        console.log(order)
        console.log(products)
    });

    function handleChangeOrder(orderValue) {

        for (let i = 0; i < products.length; i++) {
            if (orderValue == 'lancamentos') {
                console.log(orderValue);
                products.sort((a, b) => {
                    if (a.id < b.id) {
                        return -1
                    };
                    if (a.id > b.id) {
                        return 1
                    };

                    return 0;
                });
                setOrder(orderValue);
            } else {
                console.log(orderValue);
                products.sort((b, a) => {
                    if (a.id < b.id) {
                        return -1
                    };
                    if (a.id > b.id) {
                        return 1
                    };

                    return 0;
                });
                setOrder(orderValue);
            }
        }


    };

    return (
        <>
            <SelectOrder handleChangeOrder={handleChangeOrder} />
            <div className="products" >
                {products.map(product => {
                    return <ProductCard icon={product.icon} title={product.title} text={product.text} price={product.price} />
                })}
            </div>
        </>
    )
}

export default Products;