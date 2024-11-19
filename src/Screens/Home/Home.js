import React from 'react'
import './Home.css'
import home1 from '../../Asserts/home1.jpg'

const Home = () => {
    return (
        <>
            <div className='hero-img'>
                <div className='hero-text'>
                    <h1>Shop Online</h1>
                    <p className='hero-p'>
                        Discover the best deals of the season! Up to 50% off on top products. Don’t miss out!
                    </p>
                </div>
            </div>
            <div className='container mt-5 mb-5 justify-content-center align-items-center'>
                <h1 className='home-h mb-5'>Welcome to Brand...!</h1>
                <div className='d-flex h-flex justify-content-center align-items-center'>
                    <div className='col'>
                        <img className='h-img' src={home1} alt='All products' />
                    </div>
                    <div className='col'>
                        <h2 className='home-h'>Featured Categories</h2 >
                        <ul className='h-ul'>
                            <li className='h-li'>Electronics: The latest in gadgets, smart devices, and home tech solutions.</li>
                            <li className='h-li'>Fashion: Trendy apparel for men, women, and children. Refresh your wardrobe today.</li>
                            <li className='h-li'>Beauty & Health: Skincare, wellness products, and personal care essentials.</li>
                            <li className='h-li'>Home & Kitchen: Stylish and practical items to enhance your living space.</li>
                            <li className='h-li'> Sports & Outdoors: Gear up with our quality sports and fitness products.</li>
                        </ul>
                    </div>
                </div>
                <div className='d-flex h-flex justify-content-center align-items-center mt-5'>
                    <div className='col'>
                        <img className='h-img' src={home1} alt='All products' />
                    </div>
                    <div className='col'>
                        <h2 className='home-h'>Featured Categories</h2 >
                        <ul className='h-ul'>
                            <li className='h-li'>Electronics: The latest in gadgets, smart devices, and home tech solutions.</li>
                            <li className='h-li'>Fashion: Trendy apparel for men, women, and children. Refresh your wardrobe today.</li>
                            <li className='h-li'>Beauty & Health: Skincare, wellness products, and personal care essentials.</li>
                            <li className='h-li'>Home & Kitchen: Stylish and practical items to enhance your living space.</li>
                            <li className='h-li'> Sports & Outdoors: Gear up with our quality sports and fitness products.</li>
                        </ul>
                    </div>
                </div>
                <div className='d-flex h-flex justify-content-center align-items-center mt-5'>
                    <div className='col'>
                        <img className='h-img' src={home1} alt='All products' />
                    </div>
                    <div className='col'>
                        <h2 className='home-h'>Featured Categories</h2 >
                        <ul className='h-ul'>
                            <li className='h-li'>Electronics: The latest in gadgets, smart devices, and home tech solutions.</li>
                            <li className='h-li'>Fashion: Trendy apparel for men, women, and children. Refresh your wardrobe today.</li>
                            <li className='h-li'>Beauty & Health: Skincare, wellness products, and personal care essentials.</li>
                            <li className='h-li'>Home & Kitchen: Stylish and practical items to enhance your living space.</li>
                            <li className='h-li'> Sports & Outdoors: Gear up with our quality sports and fitness products.</li>
                        </ul>
                    </div>
                </div> 

            </div>

        </>
    )
}

export default Home