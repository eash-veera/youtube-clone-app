import React,{ Component } from 'react';
import './Home.scss';
import { VideoGrid } from '../../components/VideoGrid/VideoGrid';
import Sidebar from '../SideBar/SideBar';

class Home extends Component{
    render(){
        return (
            <React.Fragment>
                <Sidebar />
                <div className='home'>
                    <div className='responsive-video-grid-container'>
                        <VideoGrid title='Trending' />
                        <VideoGrid title='Autos & Vehicle' hideDivider={true} />
                    </div>
                </div>
            </React.Fragment>
        );
    }
};

export default Home;