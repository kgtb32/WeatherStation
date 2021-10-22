import React, { useState } from 'react';
import * as IoIcons from 'react-icons/io';
import './SideBar.css';
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { Link } from 'react-router-dom';
import thermometer from '../../logo_weather/thermometer-50.svg'
import raindrop from '../../logo_weather/raindrop.svg'


export default function Sidebar() {
    return (
        <div className="sidebar">
            <ProSidebar>
                <SidebarHeader>
                    {<>
                        <span> Weather Webapp</span>
                    </>
                    }
                </SidebarHeader>
                <Menu iconShape="square">
                    <MenuItem>
                        Acceuil
                        <Link to="/" />
                    </MenuItem>
                    <SubMenu title="Options">
                        <MenuItem
                        icon={<img src={thermometer} className="logo_sidebar" alt="logo" />}>
                            Températures
                            <Link to="/temperatures" />
                        </MenuItem>
                        <MenuItem 
                        icon={<img src={raindrop} className="logo_sidebar" alt="logo" />}>
                            Taux d'humidité
                        <Link to="/humidity" />
                        </MenuItem>
                        <MenuItem 
                        icon={<img src={raindrop} className="logo_sidebar" alt="logo" />}>
                            Pression Atmosphérique
                        <Link to="/pressure" />
                        </MenuItem>
                    </SubMenu>
                    <MenuItem icon={<IoIcons.IoMdSettings />}>
                        Paramètres
                        <Link to="/settings" />
                    </MenuItem>
                </Menu>
            </ProSidebar>
        </div>
    )
}