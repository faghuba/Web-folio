import React from 'react'
import CardItems from './CardItems'
import './Cards.css'

function Cards() {
    return (
        <div className="cards">
            <h1>Check out Our Epic Destinations</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItems 
                            src="images/img-8.jpg"
                            text="Explore the hidden waterfall deep inside the Amazon cool Jungle"
                            label="Adventure"
                            path="/services"
                        />
                        <CardItems 
                            src="images/img-2.jpg"
                            text="The maiden International sports adventure ever seen in the world"
                            label="Sports"
                            path="/services"
                        />
                    </ul>
                    {/* second-raw  */}
                    <ul className="cards__items">
                        <CardItems 
                            src="images/img-6.jpg"
                            text="Explore the hidden waterfall deep inside the Amazon cool Jungle"
                            label="Explore"
                            path="/services"
                        />
                        <CardItems 
                            src="images/img-1.jpg"
                            text="The maiden International sports adventure ever seen in the world"
                            label="Travels"
                            path="/services"
                        />
                        <CardItems 
                            src="images/img-5.jpg"
                            text="The maiden International sports adventure ever seen in the world"
                            label="Entertainment"
                            path="/services"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
