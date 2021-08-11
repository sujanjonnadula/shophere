import React from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import { allProductsState, Product } from '../../redux/allProducts/typings'
import { rootStore } from '../../redux/store'

export default function Products() {
    const allProducts = useSelector((state:rootStore)=>state.allProducts,shallowEqual);
    return (
        <>
        {
            allProducts?.products.map((item)=>{return <div>{item.title}</div>})
        }
        </>
    )
}


