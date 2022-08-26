import axios from 'axios'
import React, { useEffect, useReducer } from 'react'
import reducer from '../reducers/products_reducer'
import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from '../actions'

const prods_url = 'https://course-api.com/react-store-products'

const initialState = {
  isSidebarOpen:false,
  products_loading: false,
  products_error: false,
  products: [],
  featured_products: [],
  single_product_loading: false,
  single_product_error: false,
  single_product: {},
}

// useContext
const ProductsContext = React.createContext()

const ProductsProvider = ({ children }) => {

  // useReducer
  const [ state, dispatch ] = useReducer(reducer, initialState);

  const openSidebar = () =>{
    dispatch({ type: SIDEBAR_OPEN })
  }

  const closeSidebar = () =>{
    dispatch({ type: SIDEBAR_CLOSE })
  }
  
 const fetchProducts = async(prods_url) =>{
  dispatch({ type: GET_PRODUCTS_BEGIN })
    try {
      const response = await axios.get(prods_url)
      const products = response.data
      dispatch({ type: GET_PRODUCTS_SUCCESS, payload:products})
      // console.log(response);
    } catch (error) {
      dispatch({ type: GET_PRODUCTS_ERROR })
    }
 }

 const fetchSingleProduct = async(prods_url)=>{
  dispatch({ type: GET_SINGLE_PRODUCT_BEGIN })
  try {
    const response = await axios.get(prods_url)
    const singleProduct = response.data
    dispatch({ type: GET_SINGLE_PRODUCT_SUCCESS, payload: singleProduct })
    // console.log(singleProduct);
  } catch (error) {
    dispatch({ type: GET_SINGLE_PRODUCT_ERROR })
  }
 }

  useEffect(()=>{
    fetchProducts(prods_url)
  },[])

  return (
    <ProductsContext.Provider value={{ 
      ...state, 
      openSidebar,
      closeSidebar, 
      fetchSingleProduct
       }}>
      {children}
    </ProductsContext.Provider>
  )
}

export { ProductsContext, ProductsProvider }
