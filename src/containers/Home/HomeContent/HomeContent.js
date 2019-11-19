import React from 'react';
import { VideoGrid } from '../../components/VideoGrid/VideoGrid';
import './HomeContent.scss';

export class HomeContent extends React.Component {
    render(){
        return(
            <div className='home'>
                <div className='responsive-video-grid-container'>
                    <VideoGrid title='Trending' />
                    <VideoGrid title='Autos & Vehicle' hideDivider={true} />
                </div>
            </div>
        );
    }
}