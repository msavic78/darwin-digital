import React, { useEffect, useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import { LOAD_USERS } from '../GraphQL/Queries';

function GetUsers() {

    const {error, loading, data} = useQuery(LOAD_USERS)
    const [users, setUsers] = useState([])
    

    useEffect(() => {
        
        if (loading) return <p>Loading pokemons...</p>;
        if (error) return <p>Error loading pokemons</p>;

        if (data) {
            setUsers(data.pokemons);
         }

    }, [data]);

    return (
        <React.Fragment>
        
            <div>
                
                {data && data.pokemons &&
                    data.pokemons.map((pokemon, index) => (
                        <div class="pokemon">
                            <div key={index}>
                                <img src={pokemon.image} />
                            </div>
                            <div>
                                <h3>{pokemon.name}</h3>
                            </div>
                        </div>
                ))}

            </div>
        </React.Fragment>
    )

}

export default GetUsers