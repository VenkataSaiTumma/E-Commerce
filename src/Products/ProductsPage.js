import React from 'react'
import styled from 'styled-components'
import TitlePage from '../pages/TitlePage'
import { Filters, Sort, ProductList } from './Index'

const ProductsPage = () => {
  return <main>
    <TitlePage title='products'/>
     <Wrapper className='page'>
      <div className='section-center products'>
        <Filters />
        <div>
          <Sort />
          <ProductList />
        </div>
      </div>
     </Wrapper>
  </main>
}

const Wrapper = styled.div`
  .products {
    display: grid;
    gap: 3rem 1.5rem;
    margin: 4rem auto;
    padding: 0.5rem 0;
  }
  @media (min-width: 768px) {
    .products {
      grid-template-columns: 200px 1fr;
    }
  }
`

export default ProductsPage
