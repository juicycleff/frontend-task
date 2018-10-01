import React from 'react';
import PropTypes from 'prop-types';

export const DataItem = ({data}) => {
    return (
        <div className="">
            <p>{data.title}</p>
            <p>{data.body.textContent}</p>
        </div>
    )
};

DataItem.displayName = 'DataItem';

DataItem.propTypes = {
    data: PropTypes.shape({
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
};