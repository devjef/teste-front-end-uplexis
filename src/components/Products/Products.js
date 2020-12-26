import React, { useState, useEffect } from 'react';

function Products() {

    const [ order, setOrder ] = useState('lancamentos');

    useEffect(() => {
        console.log(order)
    });

    function handleChangeOrder(e) {
        setOrder(e.target.value)
    }

    return(
        <div className="order">
            <h3>Ordernar: </h3>
            <select className="order__select" defaultValue={order} onChange={handleChangeOrder}>
                <option className="order__option" value="lancamentos">Lançamentos</option>
                <option className="order__option" value="antigos">Mais antigos</option>
            </select>
        </div>
    )
}

export default Products;