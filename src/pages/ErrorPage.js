import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import  Err  from '../assets/Err.jpg'
const ErrorPage = () => {
  return (
    <Wrapper className='page-100'>
      <main>
      <h3>Page Not Found</h3>
       <img src={Err} alt='Error' />
      <Link to='/' className='btn'>Back To HomePage</Link>
      </main>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  background: var(--clr-primary-10);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  img {
    width: 100%;
    display: block;
    border-radius: 25px;
    height: 300px;
    /* object-fit: cover; */
    padding-bottom: 1rem;
  }
  h1 {
    font-size: 10rem;
  }
  h3 {
    text-transform: none;
    margin-bottom: 2rem;
  }
`

export default ErrorPage
