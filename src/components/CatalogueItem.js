import React from 'react';
import PropTypes from 'prop-types';
import { ChildrenItem } from './ChildrenItem';
import { CategoryItem } from './CategoryItem';

export const CatalogueItem = ({catalogue}) => {
    return (
        <div>
            <h1>{catalogue.name}</h1>
            <div>
                <div className="App-flex--wrap">
                    {catalogue.content_fields && catalogue.content_fields.map((category, index) => <CategoryItem key={index} category={category} /> )}
                </div>
                <div className="App-flex--wrap">
                    {catalogue.children && catalogue.children.map((child, index) => <ChildrenItem key={index} data={child} />)}
                </div>
            </div>
        </div>
    )
};

CatalogueItem.displayName = 'CatalogueItem';

CatalogueItem.propTypes = {
    catalogue: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string.isRequired,
        link: PropTypes.string,
        content_fields: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string,
                field_type: PropTypes.string,
                contenttype_field_id: PropTypes.number,
                data: PropTypes.arrayOf(
                    PropTypes.shape({
                        index: PropTypes.number,
                        id: PropTypes.number,
                        description: PropTypes.string,
                        media: PropTypes.array,
                        name: PropTypes.string,
                        title: PropTypes.string,
                        body: PropTypes.shape({
                            kind: PropTypes.string,
                            type: PropTypes.string,
                            textContent: PropTypes.string,
                        })
                    })
                )
            })
        ),
        children: PropTypes.arrayOf(
            PropTypes.shape({
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
        )
    })
};