import React from "react";
import './ImageLinkForm.css'

const ImageLinkForm = ({inputChange, submitButtonPressed}) => {
    return (
        <div>
            <p className="f3 white">
                {'Detect the faces in your pictures!'} 
            </p>
            <div className="center">
                <div className="form center pa4 br3 shadow-5">
                    <input className="f4 pa2 w-70 center" type='text' onChange={inputChange} />
                    <button className="w-30 grow f4 link ph3 pv2 dib white bg-black" onClick={submitButtonPressed}>Detect</button> 
                </div>
            </div>
        </div>
    );
}


export default ImageLinkForm;