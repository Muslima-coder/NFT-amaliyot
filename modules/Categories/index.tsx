import React from 'react'
import CategoriesContent from './CategoriesContent'
import getRequest from '@/server/getRequest'

const Categories = async () => {
    const categories = await getRequest("/categories")
  
    return <CategoriesContent categories={categories.data}/>
}

export default Categories