import React from "react";

const Preloader = () => {
    return (
        <>
            <div className="loader-wrapper relative">
                <div className="loader"></div>
                <div className="loader-section section-left"></div>
                <div className="loader-section section-right"></div>
                <img className="absolute z-[100] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[90px]" src="./assets/images/common/logoT.png" />
            </div>
        </>
    );
};

export default Preloader;
