import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import { Title } from '../components';
import ProductItem  from '../components/ProductItem';

const Collections = () => {

  const { products } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]); 
  const [subCategory, setSubCategory] = useState([]);


  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory(prev => prev.filter(item => item !== e.target.value))
    } else {
      setCategory(prev => [...prev, e.target.value])
    }
  }

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory(prev => prev.filter(item => item !== e.target.value))
    } else {
      setSubCategory(prev => [...prev, e.target.value])
    }
  }

  const applyFilter = () => {
    let productsCopy = products.slice();

    if (category.length > 0) {
      productsCopy = productsCopy.filter(item => category.includes(item.category));
    }

    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory))
    }

    setFilterProducts(productsCopy);
  }
  useEffect(() => {
    applyFilter();
  },[category, subCategory])

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      {/* Filter Options */}
      <div className='min-w-60'>
        <p  onClick={() =>(setShowFilter(!showFilter))}className='my-2 text-xl flex items-center cursor-pointer gap-2'>
          FILTERS
          <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt="" />
        </p>
         {/* Category Filter */}
          <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
            <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
            <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
              <p className='flex gap-2'>
                <input type="checkbox" className='w-3' value={'Sports'} onChange={toggleCategory}/> Sports
              </p>
              <p className='flex gap-2'>
                <input type="checkbox" className='w-3' value={'Apparels'} onChange={toggleCategory}/> Apparels
              </p>
              <p className='flex gap-2'>
                <input type="checkbox" className='w-3' value={'Kids'} onChange={toggleCategory}/> Kids
              </p>
            </div>
          </div>        
          {/* Sub Category Filter */}
          <div className={`border border-gray-300 pl-5 py-3 my-5   ${showFilter ? '' : 'hidden'} sm:block`}>
            <p className='mb-3 text-sm font-medium'>TYPE</p>
            <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
              <p className='flex gap-2'>
                <input type="checkbox" className='w-3' value={'Cricket'} onChange={toggleSubCategory}/> Cricket
              </p>
              <p className='flex gap-2'>
                <input type="checkbox" className='w-3' value={'Tennis'} onChange={toggleSubCategory}/> Tennis
              </p>
              <p className='flex gap-2'>
                <input type="checkbox" className='w-3' value={'For Winters'} onChange={toggleSubCategory}/> For Winters
              </p>
            </div>
          </div>  
      </div>

      {/* Products */}
      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={'ALL'} text2={'COLLECTIONS'}/>
          
          {/* Sorting Option */}
          <select className='border-2 border-gray-300 text-sm px-2'>
            <option value="relevant"> Sort by Relevance</option>
            <option value="low-high">Sort Low to High</option>
            <option value="high-low">Sort High to Low</option>
          </select>
        </div>

        {/* Map Products */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 gap-y-6'>
          {
            filterProducts.map((item,index) => (
              <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image}/>
            ))
          }
        </div>
      </div>

    </div>
  )
}

export default Collections
