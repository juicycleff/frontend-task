import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { CATALOGUE } from './graphql/query';
import { CatalogueItem } from './components/CatalogueItem';

class App extends Component {

    render() {
        return (
            <div className="App-container">
                <Query query={CATALOGUE} variables={{url: '/bikes', tenantID: 'demo'}}>
                    {({ loading, error, data })  => {
                        if(loading) {
                            return <div className="loading" />
                        }

                        if(error) {
                            return <div className="loading">There was an error</div>
                        }

                        if( !data || !data.catalogue ) {
                            return <div>Empty</div>
                        }

                        if(data && data.catalogue) return <CatalogueItem catalogue={data.catalogue} />
                    }}
                </Query>
            </div>
        );
    }
}

export default App;