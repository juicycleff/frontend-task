import gql from 'graphql-tag';

export const CATALOGUE = gql`
    query catalogue($url: String!, $tenantID: String!) {
        catalogue(url: $url, tenantID: $tenantID) {
            name
            id
            link
            content_fields
            children {
                link
                name
                product {
                    id
                    product_image
                    price
                    price_from
                    link
                    name
                }
            }
        }
    }
`;