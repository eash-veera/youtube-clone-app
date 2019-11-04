import React,{ Component } from 'react';
import { Video } from '../../components/Video/Video';
import { RelatedVideos } from '../../components/RelatedVideos/RelatedVideos';

export class Watch extends Component{
    render(){
        return (
            // <div style={{maxWidth: '80%'}}>
            //     <Video id='-7fuHEEmEjs' />
            // </div>
            <React.Fragment>
                <RelatedVideos />
            </React.Fragment>
        );
    }
};