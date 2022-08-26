import React, { useEffect } from 'react'
import { useParams, Navigate } from 'react-router-dom'
import { ProductsContext } from '../context/products_context'
import { formatPrice } from '../Help/helpers'
import { ProductImages, AddToCart, Stars } from '../components'
import Loading from './Loading/Loading'
import Error from './Loading/Error'
import TitlePage from './TitlePage'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const single_url = `https://course-api.com/react-store-single-product?id=`

const SingleProductPage = () => {
 const {id} = useParams()
 const { 
  single_product_loading:loading, 
  single_product_error:error, 
  single_product,
  fetchSingleProduct
 } = React.useContext(ProductsContext)

 useEffect(()=>{
  fetchSingleProduct(`${single_url}${id}`)
 },[id])
 
useEffect(()=>{
  if(error){
    setTimeout(()=>{
      <Navigate to='/' />
    },3000)
  }
},[error])

if(loading){
  return <Loading />
}

if(error){
  return <Error />
}
 const {
  id:Id,
  name, 
  price, 
  description, 
  stock, 
  stars, 
  reviews, 
  company, 
  images
} = single_product
 
  return (
    <Wrapper>
       <TitlePage title={name} product/>
       <div className='section section-center page'>
         <Link to='/products' className='btn'>
           Back To Products
         </Link>
        <div className='product-center'>
          <ProductImages images={images}/>
          <section className='content'>
            <h2>{name}</h2>
            <Stars stars={stars} reviews={reviews}/>
            <h5 className='price'>{formatPrice(price)}</h5>
            <p className='desc'>{description}</p>
            <p className='info'>
              <span>Available:</span>
              {stock >0 ? 'InStock' : 'Out of Stock'}
            </p>
            <p className='info'>
              <span>Id:</span>
              {Id}
            </p>
            <p className='info'>
              <span>Brand:</span>
              {company}
            </p>
            <hr/>
            {stock >0 && <AddToCart single_product={single_product}/>}
          </section>
        </div>
       </div>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .price {
    color: var(--clr-primary-5);
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }

  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
`

export default SingleProductPage
