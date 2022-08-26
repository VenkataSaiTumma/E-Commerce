import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
const TitlePage = ({ title, product }) => {
  return (
    <Wrapper>
      <div className='section-center'>
        <h3>
          <Link to='/'>Home</Link>
          {product && <Link to='/products'>/Products</Link>}
          / {title}
        </h3>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background:#D8E0EF;
  width: 100%;
  min-height: 15vh;
  display: flex;
  align-items: center;
  color: #07689F;

  a {
    color: var(--clr-primary-3);
    padding: 0.5rem;
    transition: var(--transition);
  }
  a:hover {
    color: var(--clr-primary-1);
  }
`

export default TitlePage
