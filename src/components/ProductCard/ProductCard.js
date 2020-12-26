import React from 'react';
import { Link } from 'react-router-dom';

function ProductCard({ icon, title, text, price }) {
    return (
        <div className="products__card">
            <div className="products__body">
                {icon}
                <h3 className="products__title">{title}</h3>
                <p className="products__text">{text}</p>
            </div>
            <div className="products__footer">
                <p className="products__price">{price}</p>
                <Link to="/saiba-mais"><p className="products__link">Saiba mais</p></Link>
            </div>
        </div>
    )
}

export default ProductCard;