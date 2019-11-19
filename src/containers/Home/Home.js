import React,{ Component } from 'react';
import './Home.scss';

import { Sidebar } from '../SideBar/SideBar';
import { HomeContent } from './HomeContent/HomeContent';

class Home extends Component{
    render(){
        return (
            <React.Fragment>
                <Sidebar />
                <HomeContent />
            </React.Fragment>
        );
    }
};

export default Home;