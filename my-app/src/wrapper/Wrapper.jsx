import React from 'react'
import './style.css'

export default function Wrapper() {
    const data = [
        {
            cover: <i className='fa-solid fa-truck-fast'></i>,
            title: "Worldwide Delivery",
            decs: "We offer competitive prices on our 100 million plus product any range.",
        },
        {
            cover: <i className='fa-solid fa-id-card'></i>,
            title: "Safe Payment",
            decs: "We offer competitive prices on our 100 million plus product any range.",
        },
        {
            cover: <i className='fa-solid fa-shield'></i>,
            title: "Shop With Confidence ",
            decs: "We offer competitive prices on our 100 million plus product any range.",
        },
        {
            cover: <i className='fa-solid fa-headset'></i>,
            title: "24/7 Support ",
            decs: "We offer competitive prices on our 100 million plus product any range.",
        },
    ]
    return (
        <>
            <section className='wrapper background'>
                <div className='container grid-SSm grid-Sm grid-Md'>
                    {
                        data.map((val, index) => {
                            return (
                                <React.Fragment key={index}>
                                    <div className='product' key={index}>
                                        <div className='img icon-circle'>
                                            <i>{val.cover}</i>
                                        </div>
                                        <h3>{val.title}</h3>
                                        <p>{val.decs}</p>
                                    </div>
                                </React.Fragment>
                            )
                        })
                    }
                </div>
            </section>
        </>
    )
}
