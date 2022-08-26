import React from 'react'
import styled from 'styled-components'
import { CartContext } from '../context/cart_context'
import { Link } from 'react-router-dom'
import { CartColumns, CartItem, CartTotals } from './index'

const CartContent = () => {
  const { cart, clearCart } =React.useContext(CartContext)
  return (
    <Wrapper className='section section-center'>
      <CartColumns />
      {cart.map((item)=>{
        return <CartItem key={item.id} {...item}/>
      })}
      <hr />
      <div className='link-container'>
        <Link to='/products' className='btn'>
          Continue Shopping
        </Link>
        <button type='button'
          className='link-btn clear-btn' onClick={clearCart} >
            Clear EveryThing
         </button>
      </div>
      <CartTotals />
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .link-container {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
  }
  .link-btn {
    background: transparent;
    border-color: transparent;
    text-transform: capitalize;
    padding: 0.25rem 0.5rem;
    background: var(--clr-primary-5);
    color: var(--clr-white);
    border-radius: var(--radius);
    letter-spacing: var(--spacing);
    font-weight: 400;
    cursor: pointer;
  }
  hr {
      border-color:black;
      margin-top: 1rem;
      margin-bottom: 3rem;
    }
  .clear-btn {
    background: var(--clr-black);
  }
`
export default CartContent
