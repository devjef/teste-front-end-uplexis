import React from 'react';

function SelectOrder({ handleChangeOrder, orderValue }) {

    function handleChange(e) {
        handleChangeOrder(e.target.value)
    };

    return(
        <div className="order">
            <h4 className="order__title">ORDENAR </h4>
            <select className="order__select" value={orderValue} onChange={handleChange}>
                <option className="order__option" value="lancamentos">Lançamentos</option>
                <option className="order__option" value="antigos">Mais antigos</option>
            </select>
        </div>
    );
};

export default SelectOrder;