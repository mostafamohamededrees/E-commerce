import React from 'react'
import Home from '../mainPage/Home'
import FlashDeals from '../flashDeals/FlashDeals'
import TopCate from '../Top/TopCate'
import Arrivals from '../newArrivals/Arrivals'
import Discount from '../discount/Discount'
import ShopCart from '../shops/ShopCart'
import Shop from '../shops/Shop'
import Annocument from '../annocument/Annocument'
import Wrapper from '../../wrapper/Wrapper'

export default function Pages({ proproductItems, addToCart, shopItems }) {
  return (
    <div>
      <Home />
      <FlashDeals productItems={proproductItems} addToCart={addToCart} />
      <TopCate />
      <Arrivals />
      <Discount />
      <Shop addToCart={addToCart} shopItems={shopItems} />
      <Annocument />
      <Wrapper />
    </div>
  )
}
