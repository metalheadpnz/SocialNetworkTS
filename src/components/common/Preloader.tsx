import React from 'react';
import rocketPreloader from "../../img/rocketPreloader.gif";

const Preloader = () => {
    return (
        <div>
            <img src={rocketPreloader} alt="preloader"/>
        </div>
    );
};

export default Preloader;