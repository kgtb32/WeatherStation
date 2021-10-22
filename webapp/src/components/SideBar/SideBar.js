import React from "react";
import { Link } from "react-router-dom";

import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarContent,
  SidebarFooter
} from "react-pro-sidebar";

import * as IoIcons from "react-icons/io";
import {RiTempColdFill } from 'react-icons/ri'

import "react-pro-sidebar/dist/css/styles.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <ProSidebar
      rtl={false}
      collapsed={false}
      toggled={false}
      breakPoint="md"
      >
        <SidebarHeader>
            <h4 className="text-center">Weather Station</h4>
        </SidebarHeader>
        <SidebarContent>
        <Menu iconShape="circle" >
          <MenuItem icon={<IoIcons.IoMdHome />}>
            Acceuil
            <Link to="/" />
          </MenuItem>
          <SubMenu title="Historique" icon={<IoIcons.IoMdTime />}>
            <MenuItem icon={<RiTempColdFill />}>
              Températures
              <Link to="/temperatures" />
            </MenuItem>
            <MenuItem icon={<IoIcons.IoIosWater />}>
              Taux d'humidité
              <Link to="/humidity" />
            </MenuItem>
            <MenuItem icon={<IoIcons.IoIosAnalytics />}>
              Pression Atmosphérique
              <Link to="/pressure" />
            </MenuItem>
          </SubMenu> 
        </Menu>
        </SidebarContent>
        <SidebarFooter>
        <Menu iconShape="circle">
            <MenuItem icon={<IoIcons.IoMdSettings />}>
              Paramètres
              <Link to="/settings" />
            </MenuItem>
          </Menu>
        </SidebarFooter>
      </ProSidebar>
    </div>
  );
}
