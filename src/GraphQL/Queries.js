import {gql} from '@apollo/client';

export const LOAD_USERS = gql`

query {
    pokemons(first: 50) {
      id
      number
      name
      weight {
        minimum
        maximum      
      }
      height {
        minimum
        maximum
      }
      types
      attacks {
        special {
          name
          type
          damage
        }
      }
      image
      attacks {
        special {
          name
          type
          damage
        }
      }
    }
  }

`;