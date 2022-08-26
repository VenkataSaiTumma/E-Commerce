import React from 'react'
import styled from 'styled-components'
import  TitlePage  from './TitlePage'
import V1 from '../assets/V1.jpg'

const AboutPage = () => {
  return <main>
    <TitlePage title='about'/>
    <Wrapper>
      <img src={V1} alt='Product logo' />
      <article>
        <div className='title'>
          <h3>Our Story</h3>
          <div className='underline'></div>
        </div>
         <p>
          If you're like most Shopify store owners, when it comes to creating an About Us Page
          it's probably a bit of an afterthought, "oh yeah, I need to tell people something
          about my store, I'll write up something that sounds good"
          86% of consumers say authenticity is important when choosing a brand to support,
          so it's important to get this right.
         </p>
      </article>
    </Wrapper>
    </main>
}

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  width: 90vm;
  margin:0 auto;
  max-width: 1180px;
  padding:5rem 0;
  img {
    width: 100%;
    display: block;
    border-radius: 25px;
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: #342e16;
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`
export default AboutPage
