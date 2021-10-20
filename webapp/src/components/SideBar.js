import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import { Link } from 'react-router-dom';
import './SideBar.css';


export default function Sidebar() {

    const SidebarData = [
        {
          title: 'Acceuil',
          path: '/',
          icon: <AiIcons.AiFillHome />,
          cName: 'nav-text'
        },
        {
          title: 'Paramètres',
          path: '/settings',
          icon: <IoIcons.IoMdSettings />,
          cName: 'nav-text'
        },
      ];
    
    return (
        <nav className='nav-menu'>
            <ul className='nav-menu-items'>
                {SidebarData.map((item, index) => {
                    return (
                        <li key={index} className={item.cName}>
                            <Link to={item.path}>
                                {item.icon}
                                <span>{item.title}</span>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>

      );
    }