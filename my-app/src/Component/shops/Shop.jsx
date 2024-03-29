import React from 'react'
import Catg from './Catg'
import ShopCart from './ShopCart'
import './style.css'
export default function Shop({ shopItems, addToCart }) {

    return (
        <>
            <section className='shop background'>
                <div className='container d_flex'>
                    <Catg />


                    <div className='contentWidth'>
                        <div className='heading d_flex'>
                            <div className='heading-left row  f_flex'>
                                <h2>Mobile Phones</h2>
                            </div>
                            <div className='heading-right row '>
                                <span>View all</span>
                                <i className='fa-solid fa-caret-right'></i>
                            </div>
                        </div>
                        <div className='product-content  grid1 grid-Sm '>
                            <ShopCart addToCart={addToCart} shopItems={shopItems} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
