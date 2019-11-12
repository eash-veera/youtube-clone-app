import React from 'react';
import './VideoInfoBox.scss';
import { Image, Button } from 'semantic-ui-react';

export class VideoInfoBox extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            collapsed : true
        };
    }

    onToggleCollapseButtonClick = () => {
        this.setState((prevState) => {
            return {
                collapsed : !prevState.collapsed
            }
        });
    }

    render(){
        let descriptionTextClass = 'collapsed';
        let buttonTitle = 'Show More';
        if(!this.state.collapsed){
            descriptionTextClass = 'expanded';
            buttonTitle = 'Show Less';
        }

        return (
            <div className='video-info-box'>
                <Image className='channel-image' src='http://via.placeholder.com/48x48' circular />
                <div className='video-info'>
                    <div className='channel-name'>Channel Name</div>
                    <div className='video-publication-date'>Thu 24, 2017</div>
                </div>
                <Button color='youtube'>91.5K Subscribe</Button>
                <div className='video-description'>
                    <div className={descriptionTextClass}>
                        <p>Hellow namaskaram, suchi vandhanam 
                            love your neigbour sex little bitch
                            ungalukku punda mokka asaya ?
                            Hellow namaskaram, suchi vandhanam 
                            love your neigbour sex little bitch
                            ungalukku punda mokka asaya ?
                            Hellow namaskaram, suchi vandhanam 
                            love your neigbour sex little bitch
                            ungalukku punda mokka asaya ?
                        </p>
                    </div>
                    <Button compact onClick={this.onToggleCollapseButtonClick}>{buttonTitle}</Button>    
                </div> 
            </div>
        );
    }
}