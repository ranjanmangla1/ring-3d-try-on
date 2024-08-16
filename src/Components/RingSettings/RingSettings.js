import React from "react";
import T from "../imagesT/T.png";
import C from "../imagesT/C.png";
import D from "../imagesT/D.png";
import dia from "../imagesT/dia.png";
import ruby from "../imagesT/ruby.png";
import eme from "../imagesT/eme.png";
import white from "../imagesT/white.png";
import yellow from "../imagesT/gold.png";
import rose from "../imagesT/rose.png";

const RingSettings = ({ textInput, number, materialChange1, textChange }) => {
    return (
        <div className="flex justify-center content-between h-100">
            <div className="flex">
                <div className="mr6">
                    <h3 className="mb3">Stone Type</h3>
                    <div className="font_radio_buttons selection_height">
                        <div className="mb3">
                            <input onClick={materialChange1} id="dia" type="radio" value="rock_d" name="stone" defaultChecked />
                            <label className="flex items-center label2" htmlFor="dia">
                                <img src={dia} alt="diamond" className="image_margin" />
                                <p className="ml3">Diamond</p>
                            </label>
                        </div>
                        <div className="mb3">
                            <input onClick={materialChange1} id="ruby" type="radio" value="rock_r" name="stone" />
                            <label className="flex items-center label2" htmlFor="ruby">
                                <img src={ruby} alt="ruby" className="image_margin" />
                                <p className="ml3">Ruby</p>
                            </label>
                        </div>
                        <div className="mb3">
                            <input onClick={materialChange1} id="eme" type="radio" value="text_e" name="stone" />
                            <label className="flex items-center label2" htmlFor="eme">
                                <img src={eme} alt="emerald" className="image_margin" />
                                <p className="ml3">Emerald</p>
                            </label>
                        </div>
                    </div>
                </div>
                
                <div>
                    <h3 className="mb3">Metal Type</h3>
                    <div className="font_radio_buttons selection_height">
                        <div className="mb3">
                            <input onClick={materialChange1} id="white" type="radio" value="ring_wg" name="metal" defaultChecked />
                            <label className="flex items-center label2" htmlFor="white">
                                <img src={white} alt="white gold" className="image_margin" />
                                <p className="ml3">White gold</p>
                            </label>
                        </div>
                        <div className="mb3">
                            <input onClick={materialChange1} id="yellow" type="radio" value="ring_yg" name="metal" />
                            <label className="flex items-center label2" htmlFor="yellow">
                                <img src={yellow} alt="yellow gold" className="image_margin" />
                                <p className="ml3">Yellow gold</p>
                            </label>
                        </div>
                        <div className="mb3">
                            <input onClick={materialChange1} id="rose" type="radio" value="rign_rg" name="metal" />
                            <label className="flex items-center label2" htmlFor="rose">
                                <img src={rose} alt="rose gold" className="image_margin" />
                                <p className="ml3">Rose gold</p>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RingSettings;
