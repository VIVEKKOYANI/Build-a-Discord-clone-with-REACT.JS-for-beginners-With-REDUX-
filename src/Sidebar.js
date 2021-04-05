import React from 'react';
import './Sidebar.css';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import SidebarChannel from './SidebarChannel';
import SignalCellularAltIcon from '@material-ui/icons/SignalCellularAlt';
import InfoIcon from '@material-ui/icons/Info';
import CallIcon from '@material-ui/icons/Call';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MicIcon from '@material-ui/icons/Mic';
import HeadsetMicIcon from '@material-ui/icons/HeadsetMic';
import SettingsIcon from '@material-ui/icons/Settings';

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <h3>Clever Programer</h3>
                <ExpandMoreIcon />
            </div>

            <div className="sidebar__channels">
                <div className="sidebar__ChannelsHeader">
                    <div className="sidebar__header">
                        <ExpandMoreIcon />
                        <h4>Text Channels</h4>
                    </div>

                    <AddIcon className="sidebar__addChannel" />
                </div>
            <div className="sidebar__channelsList">
                <SidebarChannel />
                <SidebarChannel />
                <SidebarChannel />
                <SidebarChannel />
            </div>
            </div>
            <div className="sidebar__voice">
                <SignalCellularAltIcon 
                 className="sidebar__voiceIcon" 
                 fontSize="large" 
                />
                <div className="sidebar__voiceInfo">
                    <h3>Voice Connected</h3>
                    <p>Stream</p>
                </div>

                <div className="sidebar__voiceIcons">
                    <InfoIcon />
                    <CallIcon  />
                </div>
            </div>
            <div className="sidebar__profile">
                <AccountCircleIcon />
                <div className="sidebar__profileInfo">
                    <h3>@VivekKoyani</h3>
                    <p>#thisIsMyID</p>
                </div>

                <div className="sidebar__profileIcons">
                    <MicIcon />
                    <HeadsetMicIcon />
                    <SettingsIcon />
                </div>
            </div>
        </div>
    )
}
