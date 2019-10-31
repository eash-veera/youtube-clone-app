import React,{ Component, Fragment } from 'react';
import './Home.scss';
import { VideoGrid } from '../../components/VideoGrid/VideoGrid';
import Sidebar from '../SideBar/SideBar';

class Home extends Component{
    render(){
        return (
            <Fragment>
                <Sidebar />
                <div className='home'>
                    <div className='responsive-video-grid-container'>
                        <VideoGrid title='Trending' />
                        <VideoGrid title='Autos & Vehicle' hideDivider={true} />
                    </div>
                </div>
            </Fragment>
        );
    }
};

export default Home;