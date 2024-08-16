import React from "react";
import "./Description.css";

const Description = ({price}) => {
    return (
        <div className="description-container">
            <div className="description-content">
                <h1 className="product-title">Wedding Ring</h1>
                <p className="product-description">
                    Create your perfect wedding ring with our interactive configurator. Personalize every detail to match your style.
                </p>
                <p className="product-price">{`$${price}`}</p>
                <button className="buy-now-button">Buy Now</button>
            </div>
        </div>


    );
}

export default Description;