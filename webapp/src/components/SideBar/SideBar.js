import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Particles from "react-tsparticles";

import {
	ProSidebar,
	Menu,
	MenuItem,
	SubMenu,
	SidebarHeader,
	SidebarContent,
	SidebarFooter,
} from "react-pro-sidebar";

import * as IoIcons from "react-icons/io";
import { RiTempColdFill } from "react-icons/ri";

import "react-pro-sidebar/dist/css/styles.css";

export default function Sidebar() {
	return (
		<div className="sidebar">
			<Particles
				id="tsparticles"
				style={{
					position: "absolute",
					height: "100vh",
				}}
				options={{
					background: {
						color: {
							value: "#1d1d1d",
						},
					},
					fpsLimit: 60,
					interactivity: {
						detectsOn: "canvas",
						events: {
							onClick: {
								enable: true,
								mode: "push",
							},
							onHover: {
								enable: true,
								mode: "repulse",
							},
							resize: true,
						},
						modes: {
							bubble: {
								distance: 400,
								duration: 2,
								opacity: 0.8,
								size: 40,
							},
							push: {
								quantity: 4,
							},
							repulse: {
								distance: 200,
								duration: 0.4,
							},
						},
					},
					particles: {
						color: {
							value: "#ffffff",
						},
						links: {
							color: "#ffffff",
							distance: 150,
							enable: true,
							opacity: 0.5,
							width: 1,
						},
						collisions: {
							enable: true,
						},
						move: {
							direction: "none",
							enable: true,
							outMode: "bounce",
							random: false,
							speed: 6,
							straight: false,
						},
						number: {
							density: {
								enable: true,
								value_area: 800,
							},
							value: 80,
						},
						opacity: {
							value: 0.5,
						},
						shape: {
							type: "circle",
						},
						size: {
							random: true,
							value: 5,
						},
					},
					detectRetina: true,
				}}
			/>
			<JoliProSidebar
				rtl={false}
				collapsed={false}
				toggled={false}
				breakPoint="md"
				style={{
					backgroundColor: "transparent",
				}}
			>
				<SidebarHeader>
					<h4 className="text-center">Weather Station</h4>
				</SidebarHeader>
				<SidebarContent>
					<Menu iconShape="circle">
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
			</JoliProSidebar>
		</div>
	);
}

const JoliProSidebar = styled(ProSidebar)`
	&.pro-sidebar > .pro-sidebar-inner {
		background: transparent;
	}

	& * .pro-inner-item {
		background: #2b2b2b;
		border-radius: 0px 8px 8px 0px;
		margin-top: 4px;
		width: 95%;
	}

	& * .react-slidedown {
		width: 95%;
		border-radius: 0px 8px 8px 0px;
		margin-top: 2px;
	}
`;
