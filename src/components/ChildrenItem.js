import React from 'react';
import PropTypes from 'prop-types';

export const ChildrenItem = ({data}) => {
    return (
        <div className="App-card" style={{ height: 330, width: 330, margin: 20 }}>
            <img src={data.product.product_image} alt="product image" style={{ width: "100%", maxHeight: 200 }} />
            <div className="container">
                <h4><b>{data.name}</b></h4> 
                <p>Price: {(data.product.price && data.product.price) || (data.product.price_from && data.product.price_from)}</p> 
            </div>
        </div>
    )
};

ChildrenItem.displayName = 'ChildrenItem';

ChildrenItem.propTypes = {
    data: PropTypes.shape({
        name: PropTypes.string,
        link: PropTypes.string,
        product: PropTypes.shape({
            id: PropTypes.number,
            product_image: PropTypes.any,
            price: PropTypes.number,
            name: PropTypes.string,
            price_from: PropTypes.number,
            link: PropTypes.string,
        })
    })
};