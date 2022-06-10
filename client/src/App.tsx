import React from 'react';
import './App.css';
import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client'
import CreateUser from "./Component/CreateUser";
import ListOfUsers from './Component/ListOfUsers';

function App() {

    const client = new ApolloClient({
        uri: "http://localhost:5001/graphql",
        cache: new InMemoryCache(),
    })

    return (
        <>
            <ApolloProvider client={client}>
                <CreateUser/>
                <ListOfUsers/>
            </ApolloProvider>
        </>
    );
}

export default App;
