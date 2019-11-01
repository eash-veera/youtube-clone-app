import React from 'react';
import './Video.scss';

const BASE_EMBED_URL = 'https://www.youtube.com/embed/';

export function Video (props){
    if( !props.id ){
        return null;
    }
    
    // disabled auto play, coz its annoying while developing !
    // const embedUrl = `${BASE_EMBED_URL}${props.id}?autoplay=1`;

    const embedUrl = `${BASE_EMBED_URL}${props.id}`;

    return (
        <div className='video-container'>
            <div className='video'>
                <iframe className='video-player' src={embedUrl} frameBorder='0' allow='autoplay; encrypted-media' allowFullScreen /> 
            </div>
        </div>
    );
}