import React, { useState } from 'react'
import styled from 'styled-components'
import { formatPrice } from '../Help/helpers'
import { Link } from 'react-router-dom'
const ListView = ({products}) => {
const [ readMore, setReadMore ] = useState(false)

  return  (
    <Wrapper>
      {products.map((product)=>{
        const { id, name, price, image, description } = product;
        return <article key={id}>
          <img src={image} alt={name} />
          <div>
            <h4>{name}</h4>
            <h5 className='price'>{formatPrice(price)}</h5>
            <p>
              {`${description.substring(0, 150)}...`}
              {readMore ? description : `${description.substring(0, 150)}...`}
              <button onClick={() => setReadMore(!readMore)} className='button' >
                 {readMore ? 'Show less' : '  Read More'}
              </button>
            </p>
            <Link to={`/products/${id}`} className='btn'>
              More Details
            </Link> 
          </div>
        </article>
      })}
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: grid;
  row-gap: 3rem;
  p{
    font-style: italic ;
}
  .button {
  background: var(--clr-primary-5);
  color: var(--clr-primary-10);
  padding: 0.100rem 0.100rem;
  letter-spacing: var(--spacing);
  display: inline-block;
  font-size: 0.475rem;
  cursor: pointer;
  border-radius: var(--radius);
  border-color: transparent;
}
.button:hover {
  color: var(--clr-primary-1);
  background: var(--clr-primary-7);
}
  img {
    width: 100%;
    display: block;
    width: 300px;
    height: 200px;
    object-fit: cover;
    border-radius: var(--radius);
    margin-bottom: 1rem;
  }
  h4 {
    margin-bottom: 0.5rem;
  }
  .price {
    color: var(--clr-primary-6);
    margin-bottom: 0.75rem;
  }
  p {
    max-width: 45em;
    margin-bottom: 1rem;
  }
  .btn {
    font-size: 0.5rem;
    padding: 0.25rem 0.5rem;
  }
  @media (min-width: 992px) {
    article {
      display: grid;
      grid-template-columns: auto 1fr;
      column-gap: 2rem;
      align-items: center;
    }
  }
`

export default ListView
