import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { CartContent } from '../components'
import { CartContext } from '../context/cart_context'
import Emptycart from '../Emptycart.png'
import TitlePage from './TitlePage'

const CartPage = () => {
  const {cart} = React.useContext(CartContext)
  if(cart.length<1){
      return (
        <Wrapper className='page-100'>
          <div className='empty'>
            <h2>Oops...</h2>
            <img src={Emptycart} alt='Empty cart' /> <br />
            <Link to='/products' className='btn'>
              Shop Now
            </Link>
          </div>
        </Wrapper>
      )
  }

  return <main>
    <TitlePage title='cart'/>
    <Wrapper className='page'>
      <CartContent />
    </Wrapper>
  </main>
  
}

const Wrapper = styled.main`
  .empty {
    text-align: center;
    h2 {
      margin-bottom: 0.1rem;
      font-style: italic;
    }
  }
`

export default CartPage
