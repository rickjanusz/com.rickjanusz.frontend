import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import styled from 'styled-components'
import gql from 'graphql-tag'
import PropTypes from 'prop-types'
import { CURRENT_USER_QUERY } from './User'

const REMOVE_FROM_CART_MUTATION = gql`
  mutation removeFromCart($id: ID!) {
    removeFromCart(id: $id) {
      id
    }
  }
`

const BigButton = styled.button`
  font-size: 3rem;
  background: none;
  border: 0;
  &:hover {
    color: ${(props) => props.theme.red};
    cursor: pointer;
  }
`

class RemoveFromCart extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
  }
  update = (cache, payload) => {
    console.log('Remove from cart fn')
    // 1. read the cache
    const data = cache.readQuery({
      query: CURRENT_USER_QUERY,
    })
    console.log(data)
    // 2. remove that item from the cache
    const cartItemId = payload.data.removeFromCart.id
    data.me.cart = data.me.cart.filter((cartItem) => cartItem.id !== cartItemId)
    // 3. write it to the cache
    cache.writeQuery({ query: CURRENT_USER_QUERY, data })
  }
  render() {
    return (
      <Mutation
        mutation={REMOVE_FROM_CART_MUTATION}
        variables={{ id: this.props.id }}
        update={this.update}
        optimisticResponse={{
          __typename: 'Mutation',
          removeFromCart: {
            __typename: 'CartItem',
            id: this.props.id,
          },
        }}
      >
        {(removeFromCart, { error, loading }) => (
          <BigButton
            disabled={loading}
            onClick={() => {
              removeFromCart().catch((err) => alert(err.message))
            }}
            title="Delete Item"
          >
            &times;
          </BigButton>
        )}
      </Mutation>
    )
  }
}

export default RemoveFromCart
