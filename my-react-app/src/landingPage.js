import React from "react"
import Header from './header'
import Footer from './footer'
import Card from './card'
import './index.css'



function LandingPage(){
    const cardsList = [{id: 1, name: 'Card 1'}, {id: 1, name:'Card 1'}, {id: 1, name:'Card 1'}]
    return (
        <>
            <Header/>
            <div className="cardsContainer">
            
            {cardsList.map((card)=>
                <Card id={Card.id}  title={card.name}/>
            )}

            
            

            </div>
            <Footer/>
        </>
    )
}
export default LandingPage
