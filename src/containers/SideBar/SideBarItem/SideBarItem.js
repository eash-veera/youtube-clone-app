import React from 'react';
import { Icon , Menu } from 'semantic-ui-react';
import './SideBarItem.scss';

export function SideBarItem(props) {
    const heightlight = props.highlight ? 'highlight-item' : null;

    return (
        <Menu.Item className={['sidebar-item', heightlight].join(' ')}>
            <div className='sidebar-item-alignment-container'>
                <span><Icon size='large' name={props.icon} /></span>
                <span>{props.label}</span>
            </div>
        </Menu.Item>
    );
}