import withApollo from 'next-with-apollo'
import ApolloClient from 'apollo-boost'
import { endpoint } from '../config'
import { LOCAL_STATE_QUERY, TOGGLE_CART_MUTATION } from '../components/Cart'

function createClient({ headers }) {
  return new ApolloClient({
    uri: process.env.NODE_ENV === 'development' ? endpoint : endpoint,
    request: (operation) => {
      operation.setContext({
        fetchOptions: {
          credentials: 'include',
        },
        headers,
      })
    },
    // Local Data
    clientState: {
      resolvers: {
        Mutation: {
          toggleCart(_, variables, { cache }) {
            //read the cart open value from the cache
            const { cartOpen } = cache.readQuery({
              query: LOCAL_STATE_QUERY,
            })
            const data = {
              data: {
                cartOpen: !cartOpen,
              },
            }
            cache.writeData(data)
          },
        },
      },
      defaults: {
        cartOpen: false,
      },
    },
  })
}

export default withApollo(createClient)
