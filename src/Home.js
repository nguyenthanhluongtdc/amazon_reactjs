import React from 'react'
import Product from './Product';
import './Home.css';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img 
                    className="home__image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220.jpg" 
                    alt="" />

                <div className="home__row">
                    <Product 
                        id="0"
                        title="The lean startup" 
                        image="https://m.media-amazon.com/images/I/81-QB7nDh4L._AC_UY218_.jpg"
                        price={29.099}
                        rating={5} />

                    <Product 
                        id="1"
                        title="The lean startup" 
                        image="https://m.media-amazon.com/images/I/81-QB7nDh4L._AC_UY218_.jpg"
                        price={29.099}
                        rating={5} />
                </div>

                <div className="home__row">
                    <Product 
                        id="2"
                        title="The lean startup" 
                        image="https://m.media-amazon.com/images/I/81-QB7nDh4L._AC_UY218_.jpg"
                        price={29.099}
                        rating={5} />

                    <Product 
                        id="3"
                        title="The lean startup" 
                        image="https://m.media-amazon.com/images/I/81-QB7nDh4L._AC_UY218_.jpg"
                        price={29.099}
                        rating={5} />

                    <Product 
                        id="4"
                        title="The lean startup" 
                        image="https://m.media-amazon.com/images/I/81-QB7nDh4L._AC_UY218_.jpg"
                        price={29.099}
                        rating={5} />

                </div>

                <div className="home__row">
                    <Product 
                        id="5"
                        title="The lean startup" 
                        image="https://m.media-amazon.com/images/I/81-QB7nDh4L._AC_UY218_.jpg"
                        price={29.099}
                        rating={5} />
                </div>
            </div>
        </div>
        
    )
}

export default Home
