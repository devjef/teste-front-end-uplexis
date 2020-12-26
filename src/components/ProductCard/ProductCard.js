import React from 'react';

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
                <p className="products__link">
                    <a href="/saiba-mais">Saiba mais</a>
                </p>
            </div>
        </div>
    )
}

export default ProductCard;