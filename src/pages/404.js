import React from 'react';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import animationData from '../../public/assets/404.json'; // Import your Lottie animation JSON file

const notFound = () => {
    // const defaultOptions = {
    //     loop: true, // Set to true for looped animations
    //     autoplay: true, // Set to true to autoplay the animation when the component mounts
    //     animationData: animationData, // The imported animation JSON file
    // };

    return (
        <div className='shelf center'>
            <Player
                autoplay
                loop
                src={animationData}
                style={{ maxWidth: `600px`,height: `auto`,marginTop:`140px` }}
            >
                {/* <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} /> */}
            </Player>
        </div>
    );
}

export default notFound