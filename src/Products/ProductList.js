import React from 'react'
import GridView from './GridView'
import ListView from './ListView'
import { FilterContext } from '../context/filter_context'

const ProductList = () => {
  const { filtered_products: products, grid_view } = React.useContext(FilterContext)

  if(products.length<1){
    return (
      <h5>
        Sorry, No Products Matched Your Search
      </h5>
    )
  }

  if(grid_view === false){
    return <ListView products={products} />
  }
  
  return <GridView products={products} />

}
 
export default ProductList
