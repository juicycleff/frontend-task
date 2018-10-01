import React from 'react';
import PropTypes from 'prop-types';
import { DataItem } from './DataItem';

export const CategoryItem = ({category}) => {
    return (
        <div>
            <p>{category.name}</p>
            {category.data && category.data.map(d => <DataItem key={d.id} data={d} />)}
        </div>
    )
};

CategoryItem.displayName = 'CategoryItem';

CategoryItem.propTypes = {
    category: PropTypes.shape({
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
};