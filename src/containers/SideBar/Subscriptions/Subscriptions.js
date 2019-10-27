import React, {Component} from 'react';
import Susbscription from './Susbscription/Subscription';
import {Divider} from 'semantic-ui-react';
import {SideBarHeader} from '../SideBarHeader/SideBarHeader';

export class Subscriptions extends Component{

    render(){
        return(
            <React.Fragment>
                <SideBarHeader title='Subscriptions' />
                <Susbscription label='Music Channel' broadcasting />
                <Susbscription label='Coursea' amountNewVideos={10} />
                <Susbscription label='TEDx Talks' amountNewVideos={23} />
                <Susbscription label='Stanford iOS' amountNewVideos={4} />
                <Susbscription label='Udacity' amountNewVideos={114} />
                <Divider />
            </React.Fragment>
        );
    }
}


