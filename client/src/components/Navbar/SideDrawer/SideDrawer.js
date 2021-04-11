import React from 'react';
import ReactDom from 'react-dom';

import NavbarLink from '../NavbarLink/NavbarLink';

import './SideDrawer.css';
//  FONT AWESOME ICONS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

export default function SideDrawer(props) {

    if (!props.open) return null;

    const closeIcon = <FontAwesomeIcon icon={faTimes} />

    // 
    return ReactDom.createPortal(
        <div className="side-drawer">
            <button className="close-drawer" onClick={props.onClick}>
                {closeIcon}
            </button>
            <NavbarLink
                name="Top"
                id="scroll-top"
                sideDrawer='true'
                onClick={props.onClick}
            />
            <NavbarLink
                name="Link 1"
                id="#"
                sideDrawer='true'
                onClick={props.onClick}
            />
            <NavbarLink
                name="Link 2"
                id="#"
                sideDrawer='true'
                onClick={props.onClick}
            />
            <NavbarLink
                name="Link 3"
                id="#"
                sideDrawer='true'
                onClick={props.onClick}
            />
        </div>
        , document.getElementById('portal')
    )
}