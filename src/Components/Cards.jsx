import React from 'react'
import "../Scss/cards.scss";
import Pic from "../Assets/rup.jpg";
const Cards = () => {
  return (
    <>
    <div className="cards-container">
        <div className="cards-items">
            <h1>Projects</h1>
            <div className="display-categories">
                <div className="All">All</div>
                <div className="first">First</div>
                <div className="second">Second</div>

            </div> 
            <div className="cards-list">
                <div className="card">
                    <img src={Pic} alt="" />
                    <h2>dfcgvhbjnk</h2>
                    </div>
                    <div className="card">
                    <img src={Pic} alt="" />
                    <h2>dfcgvhbjnk</h2>
                    </div>
                    <div className="card">
                    <img src={Pic} alt="" />
                    <h2>dfcgvhbjnk</h2>
                    </div>
                    <div className="card">
                    <img src={Pic} alt="" />
                    <h2>dfcgvhbjnk</h2>
                    </div>
                    <div className="card">
                    <img src={Pic} alt="" />
                    <h2>dfcgvhbjnk</h2>
                    </div>
                    <div className="card">
                    <img src={Pic} alt="" />
                    <h2>dfcgvhbjnk</h2>
                    </div>
                    <div className="card">
                    <img src={Pic} alt="" />
                    <h2>dfcgvhbjnk</h2>
                    </div>
                    </div>           

        </div>
    </div>
    </>
  )
}

export default Cards
